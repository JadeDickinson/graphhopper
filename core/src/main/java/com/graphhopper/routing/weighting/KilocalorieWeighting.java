package com.graphhopper.routing.weighting;

import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.util.EdgeIteratorState;
import com.graphhopper.util.PMap;
import com.graphhopper.util.Parameters.Routing;

public class KilocalorieWeighting extends FastestWeighting {
    protected final static double SPEED_CONV = 3.6;
    private final double headingPenalty;
    private final long headingPenaltyMillis;
    private final double maxSpeed;

    public KilocalorieWeighting(FlagEncoder encoder, PMap map) {
        super(encoder);
        headingPenalty = map.getDouble(Routing.HEADING_PENALTY, Routing.DEFAULT_HEADING_PENALTY);
        headingPenaltyMillis = Math.round(headingPenalty * 1000);
        maxSpeed = encoder.getMaxSpeed() / SPEED_CONV;
    }

    @Override
    public double getMinWeight(double distance) {
        return 0;
    }

    @Override
    public double calcWeight(EdgeIteratorState edgeState, boolean reverse, int prevOrNextEdgeId) {
        return 0;
    }

    @Override
    public String getName() {
        return "kilocalorie";
    }

}
