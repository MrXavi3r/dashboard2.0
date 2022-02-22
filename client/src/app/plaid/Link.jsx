import React, { useContext } from "react";
import { PlaidLink } from "react-plaid-link";
import { PlaidContext } from "../../context/PlaidState";
// import axios from "axios";

const Link = () => {
  const { publicToken, getAccessToken } = useContext(PlaidContext);
  const onExit = (error, metadata) => console.log("onExit", error, metadata);

  const onEvent = (eventName, metadata) => {
    console.log("onEvent", eventName, metadata);
  };

  const onSuccess = (token, metadata) => {
    console.log("onSuccess", token, metadata);
    getAccessToken(token);
  };

  return (
    <>
      <PlaidLink
        className="CustomButton bg-dark text-white"
        style={{ padding: "20px", fontSize: "16px", cursor: "pointer" }}
        token={publicToken ? publicToken : ""}
        onExit={onExit}
        onSuccess={onSuccess}
        onEvent={onEvent}
      >
        <h4 className="mb-0 px-3">Launch Link</h4>
      </PlaidLink>
    </>
  );
};

export default Link;
