package com.graphhopper.routing.weighting;

import com.graphhopper.routing.VirtualEdgeIteratorState;
import com.graphhopper.routing.util.EncodingManager;
import com.graphhopper.routing.util.FlagEncoder;
import com.graphhopper.util.*;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;

public class CalorieWeightingTest {
    private final FlagEncoder encoder = new EncodingManager("foot").getEncoder("foot");
    CmdArgs args = new CmdArgs();

    @Before public void initialize() {
        args.put("weight", "65");
        args.put("load", "0");
        args.put("height", "165");
        args.put("female", "true");
        args.put("age", "18");
    }

    @Test
    public void testEncoderIsFoot() {
        Weighting instance = new CalorieWeighting(encoder, new PMap(), args);
        assertEquals(instance.toString(), "calorie|foot");
    }

    @Test
    public void checkVirtualEdgeProperties() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 69976.69830000501,
                encoder.setProperties(1.399165014411531, true, true), "test", Helper.createPointList3D(51, 0, 10, 51, 1, 9));
        double elevationChange = instance.calcElevationChange(virtualEdge, false);
        assertEquals(-1.0, elevationChange, 0);
        double expectedDistance = instance.calcDistance(virtualEdge);// virtualEdge.getDistance();
        assertEquals(expectedDistance, 69976.69830000501, 0);

        double expectedTime = expectedDistance / 1.34112;
        double actualTime = instance.calcExactTimeInSeconds(virtualEdge, false);
        System.out.println("Actual time " + actualTime);
        assertEquals(expectedTime, actualTime, 0);
    }

    @Test
    public void testCalcElevationChange() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51, 0, 10, 51, 1, 9));
        double elevationChange = instance.calcElevationChange(virtualEdge, false);
        assertEquals(-1.0, elevationChange, 0);
    }

    @Test
    public void testCalcElevationChangeWhereReverseIsTrue() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51, 0, 10, 51, 1, 9));
        double elevationChange = instance.calcElevationChange(virtualEdge, true);
        assertEquals(1.0, elevationChange, 0);
    }

    @Test
    public void testCalcDistance() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 10, 51.518117,-0.155702, 9));
        double distance = instance.calcDistance(virtualEdge);
        System.out.println("Distance " + distance);
        assertEquals(43.0, distance, 0.2);
    }

    @Test
    public void testCalcPercentGrade() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 9, 51.518117,-0.155702, 10));
        double percentGrade = instance.calcPercentGrade(virtualEdge, false);
        assertEquals(2.332842385816, percentGrade, 0.00000000001);
    }

    @Test
    public void testCalcPercentGradeCorrectionForExtremeDownhillSlopes() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 10, 51.518117,-0.155702, 4));
        double percentGrade = instance.calcPercentGrade(virtualEdge, false);
        assertEquals(-8.0, percentGrade, 0);
    }

    @Test
    public void testCalcExactTimeInSeconds() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double expectedTime = 31.953143641135767;
        double time = instance.calcExactTimeInSeconds(virtualEdge, false);
        assertEquals(expectedTime, time, 1);
    }

    @Test
    public void testCalcSMR() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        double expectedSMR = 1769.88;
        double SMR = instance.calcSMR();
        assertEquals(expectedSMR, SMR, 0);
    }

    @Test
    public void testCalcKcal() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double MR = instance.calcMR(virtualEdge, false);
        double time = instance.calcExactTimeInSeconds(virtualEdge, false);
        double expectedKcal = MR * time / 4184;
        double kcal = instance.calcKcal(virtualEdge, false);
        System.out.println("Test cals " + kcal);
        assertEquals(expectedKcal, kcal, 0);
    }

    @Test
    public void testCalcWeight() {
        CalorieWeighting instance = new CalorieWeighting(encoder, new PMap(), args);
        VirtualEdgeIteratorState virtualEdge = new VirtualEdgeIteratorState(0, 1, 1, 2, 20,
                encoder.setProperties(10, true, true), "test", Helper.createPointList3D(51.518224,-0.155107, 45, 51.518117,-0.155702, 38));
        double expected = instance.calcKcal(virtualEdge, false);
        double weight = instance.calcWeight(virtualEdge, false, virtualEdge.getOriginalTraversalKey());
        assertEquals(expected, weight, 0);
    }
}
