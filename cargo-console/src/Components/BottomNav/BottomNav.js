import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./BottomNav.css";

export default function BottomNav() {
  const [pageTitle, setPagetitle] = useState("Networks");

  let location = useLocation();

  // Executes each time new page loads,
  //finds current route and based on that changes BottomNav UI
  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */
    switch (location.pathname) {
      case "/home":
        setPagetitle("Tracker");
        break;
      case "/delivery":
        setPagetitle("Delivery");
        break;
      case "/alert":
        setPagetitle("Alert");
        break;
      default:
        setPagetitle("Tracker");
        break;
    }
  }, [location.pathname]);
  return (
    <div className="BottomNav">
      <h1 className="nav-title">{pageTitle}</h1>
    </div>
  );
}
