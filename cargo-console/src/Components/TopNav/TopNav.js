import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { css } from "emotion";
import "./TopNav.css";
import { auth } from "firebase";

export default function TopNav() {
  var email = "vikas3091999@gmail.com";
  let location = useLocation();

  const [activeColor1, setActiveColor1] = useState("#313131");
  const [activeColor2, setActiveColor2] = useState("#313131");
  const [activeColor3, setActiveColor3] = useState("#313131");

  var trackerPageLink = css`
     {
      color: ${activeColor1};
    }
  `;
  var delivaryPageLink = css`
     {
      color: ${activeColor2};
    }
  `;
  var alertPageLink = css`
     {
      color: ${activeColor3};
    }
  `;

  // Executes each time new page loads,
  //finds current route and based on that changes BottomNav UI
  useEffect(() => {
    /*
    var currentRoute = location.pathname;
    console.log(currentRoute);
    */
    switch (location.pathname) {
      case "/tracker":
        setActiveColor1("#e7ac0a");
        break;
      case "/delivery":
        setActiveColor2("#e7ac0a");
        break;
      case "/alert":
        setActiveColor3("#e7ac0a");
        break;
      default:
        setActiveColor1("#e7ac0a");
        break;
    }
  }, [location.pathname]);
  return (
    <div className="TopNav">
      <h1 id="logo">🚚 Cargo</h1>

      <div className="nav-links">
        <Link className="nav-link" to="/tracker">
          <h1 className={trackerPageLink} id="nav-link-text">
            Tracker
          </h1>
        </Link>
        <Link className="nav-link" to="/delivery">
          <h1 className={delivaryPageLink} id="nav-link-text">
            Delivery
          </h1>
        </Link>
        <Link className="nav-link" to="/alert">
          <h1 className={alertPageLink} id="nav-link-text">
            Alert
          </h1>
        </Link>
      </div>

      <div className="dropdown">
        <svg
          id="user-icon"
          width="35"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="user-icon-properties"
            d="M17.5001 3C9.45008 3 2.91675 9.72 2.91675 18C2.91675 26.28 9.45008 33 17.5001 33C25.5501 33 32.0834 26.28 32.0834 18C32.0834 9.72 25.5501 3 17.5001 3ZM17.5001 7.5C19.9209 7.5 21.8751 9.51 21.8751 12C21.8751 14.49 19.9209 16.5 17.5001 16.5C15.0792 16.5 13.1251 14.49 13.1251 12C13.1251 9.51 15.0792 7.5 17.5001 7.5ZM17.5001 28.8C13.8542 28.8 10.6313 26.88 8.75008 23.97C8.79383 20.985 14.5834 19.35 17.5001 19.35C20.4022 19.35 26.2063 20.985 26.2501 23.97C24.3688 26.88 21.1459 28.8 17.5001 28.8Z"
            fill="#DDDDDD"
          />
        </svg>
        <h1 className="user-email">{email}</h1>
        <h1 className="user-role">Admin</h1>

        <span className="dropdown-content">
          <h1 id="username">{email}</h1>
          <button id="signout-button" onClick={() => auth().signOut()}>
            Sign Out
          </button>
        </span>
      </div>
    </div>
  );
}
