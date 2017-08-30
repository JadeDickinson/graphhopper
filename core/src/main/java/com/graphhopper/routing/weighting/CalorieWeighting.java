package com.graphhopper.routing.weighting;

import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.routing.util.HintsMap;
import com.graphhopper.util.*;
import com.graphhopper.util.Parameters.Routing;
import com.graphhopper.util.shapes.GHPoint3D;

import java.util.Iterator;

public class CalorieWeighting extends AbstractWeighting {
    protected final static double SPEED_CONV = 3.6;
    private final double headingPenalty;
    private final long headingPenaltyMillis;
    private final double maxSpeed;


    public CalorieWeighting(FlagEncoder encoder, PMap map) {
        super(encoder);
        headingPenalty = map.getDouble(Routing.HEADING_PENALTY, Routing.DEFAULT_HEADING_PENALTY);
        headingPenaltyMillis = Math.round(headingPenalty * 1000);
        maxSpeed = encoder.getMaxSpeed() / SPEED_CONV;
    }

    public CalorieWeighting(FlagEncoder encoder) {
        this(encoder, new HintsMap(0));
    }

    @Override
    public double getMinWeight(double distance) {
        return distance / maxSpeed;
    }


    public double calcElevationChange(EdgeIteratorState edge, boolean reverse) {
        PointList pl = edge.fetchWayGeometry(3);
        double firstElevation = pl.getElevation(0);
        double secondElevation = pl.getElevation(1);
        if (reverse == false) {
            if (Double.isNaN(secondElevation - firstElevation)) {
                throw new IllegalArgumentException("calcElevationChange should not return NaN");
            }
            return secondElevation - firstElevation;
        } else {
            if (Double.isNaN(firstElevation - secondElevation)) {
                throw new IllegalArgumentException("calcElevationChange should not return NaN");
            }
            return firstElevation - secondElevation;
        }
    }

    public double calcDistance(EdgeIteratorState edge) {
        PointList pl = edge.fetchWayGeometry(3);
        double distance = pl.calcDistance(new DistanceCalcEarth());
        return distance;
    }

    public double calcPercentGrade(EdgeIteratorState edge, boolean reverse) {
        double elevationChange = calcElevationChange(edge, reverse);
        if (Double.isNaN(elevationChange)) {
            throw new IllegalArgumentException("elevationChange param should not be NaN");
        }
        double distance = calcDistance(edge);
        if (Double.isNaN(distance)) {
            throw new IllegalArgumentException("distance param should not be NaN");
        }
        if (distance == 0) {
            return 0;
        }
        double percentGrade = elevationChange / distance * 100;
        if (percentGrade < -8.0) return -8.0;
        else return percentGrade;
    }

    public double calcExactTimeInSeconds(EdgeIteratorState edge, boolean reverse) {
        double distance = calcDistance(edge);
        double velocity = 1.34112;
        double exactTime = distance / velocity;
        return exactTime;
    }

    public double calcMR(EdgeIteratorState edge, boolean reverse) {
//        double weight = 65;
        double C = 0;
        double percentGrade = calcPercentGrade(edge, reverse);
        double velocity = 1.34112;
        if (percentGrade < 0) {
            C = calcC(weight, load, percentGrade, velocity);
        }
        double M = (((1.5 * weight) + ((2 * (weight + load))) *  ((load / weight) * (load / weight)))) + (terrain * (weight + load)) * (((1.5 * velocity) * (1.5 * velocity)) + (0.35 * (velocity * percentGrade)));
        double MR = M - C;

        double SMR = calcSMR();
        if (SMR > MR + constantCalc(SMR)) {
            return SMR;
        } else {
            return MR;
        }
    }

    //Add getter and setter methods

    public final double weight = 90;
    public final double load = 0;
    //Change load in Javascript too.
    public final double terrain = 1.0;
    public double height = 151;
    public boolean female = false;
    public double age = 18;

    public double constantCalc(double SMR) {
        double correction_percentage;
        if (female) {
//          //  load == 0 && height == 151 && age == 18
            correction_percentage = -0.278* Math.log(weight) + 1.6773;
//            throw new IllegalArgumentException("Correct" + correction_percentage);
        } else {
            correction_percentage = -0.183 * Math.log(weight) + 1.3233;
        }

        double correction = SMR * correction_percentage;
        return correction;
    }

    public double calcBMR() {
        double BMR;
        if (female) {
            BMR = 655 + (9.6 * weight) + (1.7 * height) - (4.7 * age);
        } else {
            BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }
        return BMR;
    }

    public double calcSMR() {
        double SMR = 1.2 * calcBMR();
        return SMR;
    }

    public double calcC(double weight, double load, double percentGrade, double velocity) {
        double C = 1 * (((-percentGrade * (weight + load) * velocity)/3.5) - (((weight + load) * ((-percentGrade + 6)*(-percentGrade + 6))) /weight) + (25 - (velocity * velocity)));
        return C;
    }

    public double calcKcal(EdgeIteratorState edge, boolean reverse) {
        double MR = calcMR(edge, reverse);
        double exactTime = calcExactTimeInSeconds(edge, reverse);
        double kcal = MR * exactTime / 4184;
        return kcal;
    }

    @Override
    public double calcWeight(EdgeIteratorState edge, boolean reverse, int prevOrNextEdgeId) {
        return calcKcal(edge, reverse);
    }

    @Override
    public String getName() {
        return "calorie";
    }
}
