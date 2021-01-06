import React, { useState, useEffect } from "react";
import "./DeviceBox.css";
import firebase from "../../firebase";
import DataBoxItem from "./DeviceBoxItem.js";

export default function DeviceBox() {
  const [dataList, setDataList] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const alertRef = firebase.database().ref("tracking-data");
    alertRef.on("value", (snapshot) => {
      const datas = snapshot.val();
      const dataList = [];
      for (let id in datas) {
        dataList.push(datas[id]);
      }
      setDataList(dataList);
      setCount(dataList.length);
    });
  }, []);

  return (
    <div className="DeviceBox">
      <div className="title">
        <h1>Device Data {count}</h1>
      </div>
      <div className="DeviceBox-data">
        {dataList
          ? dataList
              .slice(0)
              .reverse()
              .map((data, index) => <DataBoxItem data={data} key={index} />)
          : ""}
      </div>
    </div>
  );
}
