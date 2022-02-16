const express = require("express");
const router = express.Router();

const {
  createLinkToken,
  tokenExchange,
  setAccessToken,
  getAccounts,
  getBalance,
  getTransactions,
  fetchItemIdentity,
  fetchItemInfo,
} = require("../controllers/plaidLink");

router.route("/create_link_token").post(createLinkToken);
router.route("/set_access_token").post(setAccessToken);
router.route("/accounts").get(getAccounts);
router.route("/balance").get(getBalance);
router.route("/transactions").get(getTransactions);
router.route("/identity").get(fetchItemIdentity);
router.route("/item").get(fetchItemInfo);

module.exports = router;
