import React, { useState } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";

const Link = () => {
  const [transactions, setTransactions] = useState([]);

  const handleOnSuccess = (public_token, metadata) => {
    // send token to client server
    axios.post("api/v1/plaid/auth/public_token", {
      public_token: public_token,
    });
  };

  const handleOnExit = () => {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  };

  const handleClick = () => {
    axios.get("api/v1/plaid/transactions").then((res) => {
      setTransactions(res.data);
    });
  };

  return (
    <div>
      {/* <PlaidLink
        clientName="React Plaid Setup"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="add your public key here"
        onExit={() => handleOnExit()}
        onSuccess={() => handleOnSuccess()}
        className="test"
      >
        Launch Link
      </PlaidLink> */}
      {/* <div>
        <button onClick={() => handleClick()}>Get Transactions</button>
      </div> */}
    </div>
  );
};

export default Link;
