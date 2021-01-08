import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./Map.css";

/**
 * Main Map instance of Console
 **/

function Map(props) {
  const [markerList, setMarkerList] = useState();
  const mapType = "mapbox://styles/mapbox/streets-v11";
  const [viewport, setViewport] = useState({
    height: "100vh",
    width: "70vw",
    latitude: 19.182755,
    longitude: 72.840157,
    zoom: 10,
  });

  useEffect(() => {
    setMarkerList(props.markerList);
  }, [props]);

  return (
    <div className="map-container">
      <div id="map">
        <ReactMapGL
          mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
          mapStyle={mapType}
          {...viewport}
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {/* Alerts goes here*/}
          {markerList
            ? markerList.map((marker) => (
                <Marker
                  latitude={marker.lat}
                  longitude={marker.long}
                  offsetLeft={-20}
                  offsetTop={-10}
                >
                  <span role="img" aria-label="">
                    {props.markerIcon}
                  </span>
                </Marker>
              ))
            : ""}
        </ReactMapGL>
      </div>
    </div>
  );
}

export default Map;
