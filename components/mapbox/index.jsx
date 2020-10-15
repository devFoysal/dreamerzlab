import React, { useState, useEffect } from "react";
import ReactMapGL, { Source, Layer, Popup } from "react-map-gl";
import * as USStatesData from "../../src/_data/map.json";

// Mapbox Token
const mapboxToken =
  "pk.eyJ1Ijoia2t1cnR6IiwiYSI6ImNrOWE4djN1eDAyd3UzZXBuYzF1OWtjYTQifQ.obmfLm5bA5yqrac86Fw8GQ";

const Mapbox = () => {
  const [popState, setPopState] = useState(null);
  const [mapHeight, setMapHeight] = useState(0);
  const [viewport, setViewport] = useState(null);

  // All us state from _data/map.json
  const USStates = USStatesData.default;

  // PolygonLayer options
  const statePolygonLayer = {
    id: "usStateFills",
    type: "fill",
    source: "usState",
    sourceLayer: "usState",
    layout: {},
    filter: ["==", "$type", "Polygon"],
  };

  // LineLayer options
  const stateLineLayer = {
    id: "usStateLines",
    type: "line",
    source: "usState",
    sourceLayer: "usState",
    filter: ["==", "$type", "Polygon"],
  };

  useEffect(() => {
    // Header element
    let headerElement = document.getElementById("primaryMenu");

    // Set map height with out header element height
    setMapHeight(innerHeight - headerElement.clientHeight);

    // Setup map viewport
    setViewport({
      width: "100%",
      height: mapHeight,
      latitude: 41.850033,
      longitude: -87.6500523,
      zoom: 4,
    });
  }, [mapHeight]);

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/foysalmahmud/ckg945rrt0bp419s6fmi3gq81"
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={mapboxToken}
    >
      {/* Data source */}
      <Source id="usState" type="geojson" data={USStates} />

      {/* Polygon layer */}
      <Layer
        {...statePolygonLayer}
        paint={{
          "fill-color": "rgba(243,156,18, 0.3)",
        }}
      />

      {/* Line layer */}
      <Layer
        {...stateLineLayer}
        paint={{
          "line-color": "rgba(243,156,18, 1)",
          "line-width": 2,
        }}
      />
    </ReactMapGL>
  );
};

export default Mapbox;
