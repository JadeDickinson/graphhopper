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
}
