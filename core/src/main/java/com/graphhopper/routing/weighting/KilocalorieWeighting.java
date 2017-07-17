package com.graphhopper.routing.weighting;

import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.util.EdgeIteratorState;

public class KilocalorieWeighting extends FastestWeighting {
    protected KilocalorieWeighting(FlagEncoder encoder) {
        super(encoder);
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
