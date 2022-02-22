const express = require("express");
const plaid = require("plaid");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const client = new plaid.Client({
  clientID: process.env.PLAID_CLIENT_ID,
  secret: process.env.PLAID_SECRET,
  env: plaid.environments.sandbox,
});

exports.createLinkToken = async (req, res) => {
  try {
    const response = await client.createLinkToken({
      user: {
        client_user_id: process.env.PLAID_CLIENT_ID,
      },
      client_name: "Plaid Test App",
      products: ["auth", "transactions"],
      country_codes: ["US"],
      language: "en",
      webhook: "https://sample-web-hook.com",
      account_filters: {
        depository: {
          account_subtypes: ["checking", "savings"],
        },
      },
    });
    return res.send({ link_token: response.link_token });
  } catch (err) {
    return res.send({ err: err.message });
  }
};

exports.getAccessToken = async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const { publicToken } = req.body;
    const response = await client
      .exchangePublicToken(publicToken)
      .catch((err) => {
        if (!publicToken) {
          return "no public token";
        }
      });
    console.log("getaccess token response", response);
    const itemId = response.item_id;
    return res.send({ access_token: response.access_token });
  } catch (error) {
    console.log(error);
  }
};

exports.getTransactions = async (req, res) => {
  const { accessToken } = req.body;
  const response = await client
    .getTransactions(accessToken, "2022-01-20", "2022-02-20", {
      count: 250,
      offset: 0,
    })
    .catch((err) => {
      if (!accessToken) {
        return "no access token";
      }
    });
  const transactions = response.transactions;
  console.log(transactions);
  return res.send({ transactions: transactions });
};

exports.getLinkToken = async (req, res) => {
  const response = await client.getLinkToken(linkToken).catch((err) => {
    if (!linkToken) {
      return "no link token";
    }
  });
};
