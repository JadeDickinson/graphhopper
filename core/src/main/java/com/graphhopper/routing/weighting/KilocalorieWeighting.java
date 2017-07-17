package com.graphhopper.routing.weighting;

import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.routing.util.HintsMap;
import com.graphhopper.util.EdgeIteratorState;

public class KilocalorieWeighting extends AbstractWeighting {
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
    public long calcMillis(EdgeIteratorState edgeState, boolean reverse, int prevOrNextEdgeId) {
        return 0;
    }

    @Override
    public FlagEncoder getFlagEncoder() {
        return null;
    }

    @Override
    public String getName() {
        return null;
    }

    @Override
    public boolean matches(HintsMap map) {
        return false;
    }
}
