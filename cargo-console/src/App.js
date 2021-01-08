/*  Main entry point of the app used for routing between pages */

import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Web3 from "web3";
import "./App.css";
import LandingPage from "../src/Pages/LandingPage/LandingPage.js";
import Tracker from "../src/Pages/Tracker/Tracker.js";
import Delivery from "../src/Pages/Delivery/Delivery.js";
import Alert from "../src/Pages/Alert/Alert.js";
import Setting from "../src/Pages/Setting/Setting.js";
import { BlockchainDataContext } from "./Components/BlockchainDataContext.js";

function App() {
  const [accountId, setAccountId] = useContext(BlockchainDataContext);

  /**Register an async functions for metamask connection
   * prompt & connect webapp to blockchain using metamask */

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.currentProvider);
    } else {
      window.alert("Non-Ethereum browser detected. Consider trying Metamask");
    }
  };

  /**Register an async functions that fetches
   * required data from blockchain */

  const loadBlockchainData = async () => {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0]);
    setAccountId(accounts[0]);
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
          </Route>
          <Route exact path="/home" component={LandingPage} />
          <Route exact path="/tracker" component={Tracker} />
          <Route exact path="/delivery" component={Delivery} />
          <Route exact path="/alert" component={Alert} />
          <Route exact path="/setting" component={Setting} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
