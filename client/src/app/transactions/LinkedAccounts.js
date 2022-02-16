import React, { useCallback } from "react";
import Link from "../link/Link";
import axios from "axios";
import { usePlaidLink } from "react-plaid-link";
import { Col, Card, Button } from "react-bootstrap";

const LinkedAccounts = () => {
  // The usePlaidLink hook manages Plaid Link creation
  // It does not return a destroy function;
  // instead, on unmount it automatically destroys the Link instance

  const onSuccess = useCallback((public_token, metadata) => {
    // log and save metadata
    // exchange public token
    fetch("//https://localhost:5000/exchange-public-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        public_token,
      },
    });
  }, []);

  const onEvent = useCallback((event, metadata) => {
    // log eventName and metadata
  }, []);

  const config = {
    onSuccess,
    onEvent,
    token: "null",
    //required for OAuth; if not using OAuth, set to null or omit:
    receivedRedirectUri: window.location.href,
  };
  const { open, exit, ready } = usePlaidLink(config);

  return (
    <Col className="mx-auto d-flex shadow p-3 rounded" md={12} xl={8}>
      <Card className="border-0 bg-white">
        <Card.Header className="bg-white border-0 text-dark my-auto">
          <h3 className="mb-0">Connect Bank</h3>
          <p className="mb-0">
            powered by <b className="text-info">Plaid</b>&#174;
          </p>
        </Card.Header>
        <Card.Body className="bg-white text-dark">
          <p className="mb-4">
            Securely link bank accounts and credit cards to DASHBOARD via the
            Plaid API in order to track real time balances, transaction data,
            investment information, and more. You may link as many bank accounts
            as you like. An overview of your linked accounts will appear here
            below. Click the launch button to link a new account.
          </p>
          <Button
            className="w-25 py-3 bg-dark d-flex align-items-center justify-content-between"
            onClick={open}
            disabled={!ready}
          >
            <h4 className="mb-0">Launch Link</h4>
            <h4 className="mb-0">&gt;</h4>
          </Button>
          <Link />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LinkedAccounts;
