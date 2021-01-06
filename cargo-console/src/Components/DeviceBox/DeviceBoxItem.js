import { defaultTo } from "lodash";
import React from "react";
import "./DeviceBoxItem.css";
/** 
Its a simple List item that is used as alert in 
Alertbar component
**/

export default function DataBoxItem({ data }) {
  console.log(data);

  return (
    <div className="DataBoxItem-container">
      <div className="items-row1">
        <h1>Device Id</h1>
        <h1>{data.deviceId}</h1>
      </div>
      <div className="items-row2">
        <h1>Latitude Id</h1>
        <h1>{data.lat}</h1>
      </div>
      <div className="items-row3">
        <h1>Longitude</h1>
        <h1>{data.long}</h1>
      </div>
      <div className="items-row4">
        <h1>TimeStamp</h1>
        <h1>{data.time}</h1>
      </div>
      <div className="margin"></div>
    </div>
  );
}
