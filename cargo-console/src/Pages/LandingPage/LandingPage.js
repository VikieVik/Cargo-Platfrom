import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import coverImage from "../../asset/cover-image.svg";
import coverDecoration from "../../asset/cover-decoration.svg";

export default function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="topnav">
        <h1 className="logo">🚚 Cargo</h1>
        <Link className="dashboard-link" to="/tracker">
          DEMO
        </Link>
      </div>

      <div className="text-content">
        <h1 className="header-text">Coldchain Tracking</h1>
        <h1 className="header-text">System Secured</h1>
        <h1 className="header-text"> With Ethereum</h1>
        <div className="header-description">
          <p>
            Our hardware & software lets you monitor temperature, light & GPS
            data. Saves important data points & events on ethereum blockchain.
          </p>
        </div>
      </div>

      <img id="cover-image" src={coverImage} alt="" />
      <footer>
        <h1>© Cargo 2020. All Rights Reserved</h1>
      </footer>
    </div>
  );
}
