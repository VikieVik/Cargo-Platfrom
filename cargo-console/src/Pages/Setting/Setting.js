import React, { useContext } from "react";
import "./Setting.css";
import TopNav from "../../Components/TopNav/TopNav.js";
import { BlockchainDataContext } from "../../Components/BlockchainDataContext.js";

export default function Setting() {
  const [accountId, setAccountId] = useContext(BlockchainDataContext);

  return (
    <div className="Tracker">
      <TopNav />
      <div className="content-container">
        <h1 className="header">Account ID : {accountId}</h1>
        <h1 className="header">Network ID : {}</h1>
        <h1 className="header">Gas Price : {}</h1>
      </div>
      <footer></footer>
    </div>
  );
}
