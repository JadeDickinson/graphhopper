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

    @Test
    public void testCalcElevationChangeWhereReverseIsTrue() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51, 0, 10, 51, 1, 9));
        double elevationChange = instance.calcElevationChange(virtualEdge, true);
        assertEquals(1.0, elevationChange, 0);
    }

    @Test
    public void testCalcDistance() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 10, 51.518117,-0.155702, 9));
        double distance = instance.calcDistance(virtualEdge);
        assertEquals(43.0, distance, 0.2);
    }

    @Test
    public void testCalcPercentGrade() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 10, 51.518117,-0.155702, 9));
        double percentGrade = instance.calcPercentGrade(virtualEdge, false);
        assertEquals(-2.332842385816, percentGrade, 0.00000000001);
    }

    @Test
    public void testCalcPercentGradeCorrectionForExtremeDownhillSlopes() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 10, 51.518117,-0.155702, 6));
        double percentGrade = instance.calcPercentGrade(virtualEdge, false);
        assertEquals(-8.0, percentGrade, 0);
    }

    @Test
    public void testCalcWalkingVelocity() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double velocity = instance.calcWalkingVelocity(virtualEdge, false);
        double expectedVelocity = (6*Math.exp(-3.5 * ((instance.calcPercentGrade(virtualEdge, false)*0.01) + 0.05)) * 1000) / 60 / 60;
        assertEquals(expectedVelocity, velocity, 0);
    }

    @Test
    public void testCalcExactTimeInSeconds() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double expectedTime = 23.456569816934746;
        double time = instance.calcExactTimeInSeconds(virtualEdge, false);
        assertEquals(expectedTime, time, 0);
    }

    @Test
    public void testCalcMr() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double expectedMR = 162.1804741456141;
        double MR = instance.calcMR(virtualEdge, false);
        assertEquals(expectedMR, MR, 0);
    }

    @Test
    public void testCalcKcal() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap());
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double MR = instance.calcMR(virtualEdge, false);
        double time = instance.calcExactTimeInSeconds(virtualEdge, false);
        double expectedKcal = MR * time / 4184;
        double kcal = instance.calcKcal(virtualEdge, false);
        assertEquals(expectedKcal, kcal, 0);
    }
}
