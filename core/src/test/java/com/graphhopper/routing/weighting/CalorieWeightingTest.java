package com.graphhopper.routing.weighting;

import com.graphhopper.routing.VirtualEdgeIteratorState;
import com.graphhopper.routing.util.EncodingManager;
import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.util.*;
import org.junit.Test;

import java.util.Iterator;

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
//        new VirtualEdgeIteratorState(originalTraversalKey, edgeID, baseNode, adjNode, distance, flag, name, pointList)
        double expectedSpeed = instance.getFlagEncoder().getSpeed(virtualEdge.getFlags());
        assertEquals(expectedSpeed, 10.0, 0);
        double expectedDistance = virtualEdge.getDistance();
        assertEquals(expectedDistance, 20, 0);
        CalorieWeighting calorieInstance = (CalorieWeighting)instance;
        double expectedSpeedConv = calorieInstance.getSpeedConv();
        assertEquals(expectedSpeedConv, 3.6, 0);

        double expectedTime = expectedDistance / expectedSpeed * expectedSpeedConv;
        double actualTime = instance.calcWeight(virtualEdge, false, virtualEdge.getOriginalTraversalKey());
        assertEquals(expectedTime, actualTime, 0);

    }

    @Test
    public void testCalcElevationChange() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51, 0, 10, 51, 1, 9));
        double elevationChange = instance.calcElevationChange(virtualEdge, false);
        assertEquals(-1.0, elevationChange, 0);
    }
}
