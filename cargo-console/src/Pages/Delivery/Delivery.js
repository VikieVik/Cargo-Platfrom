import React, { useState, useEffect } from "react";
import "./Delivery.css";
import firebase from "../../firebase.js";
import Web3 from "web3";
import TopNav from "../../Components/TopNav/TopNav.js";
import DeviceBox from "../../Components/DeviceBox/DeviceBox.js";
import Map from "../../Components/Map/Map.js";

export default function Delivery() {
  // Stores list of markers from DB
  const [markerList, setMarkerList] = useState();
  var markerIcon = "✅ ";

  const readDatafromDB = () => {
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
  };

  useEffect(() => {
    //Read data from firebase realtime db
    readDatafromDB();
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
