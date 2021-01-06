import React, { useState, useEffect } from "react";
import "./Alert.css";
import TopNav from "../../Components/TopNav/TopNav.js";
import DeviceBox from "../../Components/DeviceBox/DeviceBox.js";
import Map from "../../Components/Map/Map.js";
import firebase from "../../firebase.js";

export default function Alert() {
  // Stores list of markers from DB
  const [markerList, setMarkerList] = useState();
  var markerIcon = "🛑";

  // fetch Marker data from DB
  useEffect(() => {
    const markerRef = firebase.database().ref("tracking-data");
    markerRef.on("value", (snapshot) => {
      const markers = snapshot.val();
      const markerKey = snapshot.key;
      const markerList = [];
      for (let id in markers) {
        markerList.push(markers[id]);
      }
      setMarkerList(markerList);
    });
  }, []);

  return (
    <div className="Delivery">
      <TopNav />
      <DeviceBox />
      <Map markerList={markerList} markerIcon={markerIcon} />
      <footer>
        <h1>© Cargo 2020. All Rights Reserved</h1>
      </footer>
    </div>
  );
}
