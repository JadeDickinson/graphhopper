package com.graphhopper.routing.weighting;

import com.graphhopper.routing.VirtualEdgeIteratorState;
import com.graphhopper.routing.util.EncodingManager;
import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.storage.GraphBuilder;
import com.graphhopper.storage.GraphHopperStorage;
import com.graphhopper.util.EdgeIterator;
import com.graphhopper.util.EdgeIteratorState;
import com.graphhopper.util.GHUtility;
import com.graphhopper.util.Helper;
import com.graphhopper.util.PMap;
import com.graphhopper.util.Parameters;
import com.graphhopper.util.Parameters.Routing;
import org.junit.Test;

import static com.graphhopper.util.GHUtility.createMockedEdgeIteratorState;
import static org.junit.Assert.assertEquals;

public class CalorieWeightingTest {
    private final FlagEncoder encoder = new EncodingManager("foot").getEncoder("foot");

    @Test
    public void testEncoderIsFoot() {
        Weighting instance = new CalorieWeighting(encoder);
        assertEquals(instance.toString(), "calorie|foot");
    }

    @Test
    public void checkVirtualEdgeProperties() {
        Weighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList(51, 0, 51, 1));
        double expectedSpeed = instance.getFlagEncoder().getSpeed(virtualEdge.getFlags());
        assertEquals(expectedSpeed, 10.0, 0);
        double expectedDistance = virtualEdge.getDistance();
        assertEquals(expectedDistance, 20, 0);
        CalorieWeighting calorieInstance = (CalorieWeighting)instance;
        double expectedSpeedConv = calorieInstance.getSpeedConv();
        assertEquals(expectedSpeedConv, 3.6, 0);
    }
}
