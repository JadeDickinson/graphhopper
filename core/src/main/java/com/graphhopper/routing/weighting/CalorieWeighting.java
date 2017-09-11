package com.graphhopper.routing.weighting;

import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.routing.util.HintsMap;
import com.graphhopper.util.*;
import com.graphhopper.util.Parameters.Routing;

public class CalorieWeighting extends AbstractWeighting {
    protected final static double SPEED_CONV = 3.6;
    private final double headingPenalty;
    private final long headingPenaltyMillis;
    private final double maxSpeed;

    private CmdArgs args;
    private double weight;
    private double load;
    private double height;
    private boolean female;
    private double age;
    private final double TERRAIN = 1.0;

    private double SMR;

    public double getWeight() {
        return this.weight;
    }

    public double getLoad() {
        return this.load;
    }

    public double getTerrain() {
        return this.TERRAIN;
    }

    public double getHeight() {
        return this.height;
    }

    public boolean getFemale() {
        return this.female;
    }

    public double getAge() {
        return this.age;
    }

    public CalorieWeighting(FlagEncoder encoder, PMap map, CmdArgs args) {
        super(encoder);
        this.args = args;
        weight = Double.parseDouble(args.get("weight"));
        load = Double.parseDouble(args.get("load"));
        height = Double.parseDouble(args.get("height"));
        female = Boolean.parseBoolean(args.get("female"));
        age = Double.parseDouble(args.get("age"));
        headingPenalty = map.getDouble(Routing.HEADING_PENALTY, Routing.DEFAULT_HEADING_PENALTY);
        headingPenaltyMillis = Math.round(headingPenalty * 1000);
        maxSpeed = encoder.getMaxSpeed() / SPEED_CONV;
        SMR = calcSMR();
    }

    public CalorieWeighting(FlagEncoder encoder) {
        this(encoder, new HintsMap(0), new CmdArgs(null));
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
        double C = 0;
        double percentGrade = calcPercentGrade(edge, reverse);
        double velocity = 1.34112;
        if (percentGrade < 0) {
            C = calcC(weight, load, percentGrade, velocity);
        }
        double M = (((1.5 * weight) + ((2 * (weight + load))) *  ((load / weight) * (load / weight)))) + (TERRAIN * (weight + load)) * (((1.5 * velocity) * (1.5 * velocity)) + (0.35 * (velocity * percentGrade)));
        double MR = M - C;
        if (SMR > MR + constantCalc(SMR)) {
            return SMR;
        } else {
            return MR;
        }
    }

    public double constantCalc(double SMR) {
        double correction_percentage;
        if (female) {
            correction_percentage = -0.278* Math.log(weight) + 1.6773;
        } else {
            correction_percentage = -0.183 * Math.log(weight) + 1.3233;
        }
        if (height != 151) {
            correction_percentage = correctForHeight(correction_percentage, height);
        }
        if (load != 0) {
            correction_percentage = correctForLoad(correction_percentage, load);
        }
        if (age != 18) {
            correction_percentage = correctForAge(correction_percentage, age);
        }
        double correction = SMR * correction_percentage;
        return correction;
    }

    public double correctForHeight(double correction_percentage, double height) {
        double height_constant;
        if (female) height_constant = 0.000546551724137932;
        else height_constant = 0.00121509433962264;
        if (height > 151) {
            correction_percentage = correction_percentage + ( height_constant * (height - 151)  );
        } else {
            correction_percentage = correction_percentage - ( height_constant * (151 - height)  );
        }
        return correction_percentage;
    }

    public double correctForLoad(double correction_percentage, double load) {
        if (load > 51) {
            throw new IllegalArgumentException("Load is too heavy to be carried");
        }
        double load_constant;
        if (female) load_constant = 0.00764607843137255;
        else load_constant = 0.00698137254901961;
        correction_percentage = correction_percentage - (load_constant * load);
        return correction_percentage;
    }

    public double correctForAge(double correction_percentage, double age) {
        double age_constant;
        if (female) age_constant = 0.00196829268292683;
        else age_constant = 0.00233536585365854;
        correction_percentage = correction_percentage - (age_constant * (age - 18));
        return correction_percentage;
    }

    public double calcBMR() {
        double BMR;
        if (female) {
            BMR = 655 + (9.6 * weight) + (1.7 * height) - (4.7 * age);
        } else {
            BMR = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);
        }
        // Calculation done in this order for performance.
        BMR = (BMR * 4184) / 86400;
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
        if (kcal < 0) {
            throw new IllegalArgumentException("Calories should never be negative");
        }
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
