/*
 *  Licensed to GraphHopper GmbH under one or more contributor
 *  license agreements. See the NOTICE file distributed with this work for 
 *  additional information regarding copyright ownership.
 * 
 *  GraphHopper GmbH licenses this file to you under the Apache License, 
 *  Version 2.0 (the "License"); you may not use this file except in 
 *  compliance with the License. You may obtain a copy of the License at
 * 
 *       http://www.apache.org/licenses/LICENSE-2.0
 * 
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package com.graphhopper.routing.weighting;

import com.graphhopper.storage.NodeAccess;
import com.graphhopper.util.DistanceCalc;
import com.graphhopper.util.Helper;

/**
 * Approximates the distance to the goal node by weighting the beeline distance according to the
 * distance weighting
 *
 */
public class BeelineWeightApproximator implements WeightApproximator {
    private final NodeAccess nodeAccess;
    private final Weighting weighting;
    private DistanceCalc distanceCalc = Helper.DIST_EARTH;
    private double toLat, toLon, toEle;
    private double epsilon = 1;

    public BeelineWeightApproximator(NodeAccess nodeAccess, Weighting weighting) {
        this.nodeAccess = nodeAccess;
        this.weighting = weighting;
    }

    @Override
    public void setTo(int toNode) {
        toLat = nodeAccess.getLatitude(toNode);
        toLon = nodeAccess.getLongitude(toNode);
        toEle = nodeAccess.getElevation(toNode);
    }

    public WeightApproximator setEpsilon(double epsilon) {
        this.epsilon = epsilon;
        return this;
    }

    @Override
    public WeightApproximator reverse() {
        return new BeelineWeightApproximator(nodeAccess, weighting).setDistanceCalc(distanceCalc).setEpsilon(epsilon);
    }

    @Override
    public double approximate(int fromNode) {
        double fromLat = nodeAccess.getLatitude(fromNode);
        double fromLon = nodeAccess.getLongitude(fromNode);
        double dist2goal = distanceCalc.calcDist(toLat, toLon, fromLat, fromLon);
        if (weighting.getClass().toString().contains("CalorieWeighting")) {
            CalorieWeighting calWeighting = (CalorieWeighting)weighting;
            double fromEle = nodeAccess.getElevation(fromNode);
            double percentGrade = (toEle - fromEle) / dist2goal * 100;
            if (dist2goal == 0) percentGrade = 0;
            if (percentGrade < -8.0) percentGrade = -8.0;
            double velocity = 1.34112;
            double estimatedTime2goal = dist2goal / velocity;
            double C = 0;
            if (percentGrade < 0)
                C = calWeighting.calcC(calWeighting.getWeight(), calWeighting.getLoad(), percentGrade, velocity);
            double M = (((1.5 * calWeighting.getWeight()) + ((2 * (calWeighting.getWeight() + calWeighting.getLoad()))) *  ((calWeighting.getLoad() / calWeighting.getWeight()) * (calWeighting.getLoad() / calWeighting.getWeight())))) + (calWeighting.getTerrain() * (calWeighting.getWeight() + calWeighting.getLoad())) * (((1.5 * velocity) * (1.5 * velocity)) + (0.35 * (velocity * percentGrade)));
            double MR = M - C;

            double BMR;
            if (calWeighting.getFemale()) {
                BMR = 655 + (9.6 * calWeighting.getWeight()) + (1.7 * calWeighting.getHeight()) - (4.7 * calWeighting.getAge());
            } else {
                BMR = 66 + (13.7 * calWeighting.getWeight()) + (5 * calWeighting.getHeight()) - (6.8 * calWeighting.getAge());
            }
            double SMR = 1.2 * BMR;
            double kcal;
            if (SMR > MR) kcal = SMR * estimatedTime2goal / 4184;
            else kcal = MR * estimatedTime2goal / 4184;
            if(kcal < 0) throw new IllegalArgumentException("Calories for estimate to goal should not be negative");
            return kcal;
        } else {
            double weight2goal = weighting.getMinWeight(dist2goal);
            return weight2goal * epsilon;
        }
    }

    public BeelineWeightApproximator setDistanceCalc(DistanceCalc distanceCalc) {
        this.distanceCalc = distanceCalc;
        return this;
    }

    @Override
    public String toString() {
        return "beeline";
    }
}
