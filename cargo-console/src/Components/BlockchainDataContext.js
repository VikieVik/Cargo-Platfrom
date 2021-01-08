/**
 * This is a context that stores data fron
 * blockchain like accountId, networkId, gas etc
 */

import React, { useState, createContext } from "react";

export const BlockchainDataContext = createContext();

export const BlockchainDataProvider = (props) => {
  const [accountId, setAccountId] = useState("none");
  const [networkId, setNetworkId] = useState("none");
  const [gasPrice, setGasPrice] = useState("none");

  return (
    <BlockchainDataContext.Provider
      value={
        ([accountId, setAccountId],
        [networkId, setNetworkId],
        [gasPrice, setGasPrice])
      }
    >
      {props.children}
    </BlockchainDataContext.Provider>
  );
};
