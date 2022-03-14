const express = require("express");
const router = express.Router();

const {
  createLinkToken,
  getAccessToken,
  getLinkToken,
  getTransactions
} = require("../controllers/plaidLink");

router.route("/create_link_token").post(createLinkToken);
router.route("/get_access_token").post(getAccessToken);
router.route("/transactions").post(getTransactions);
router.route("/get_link_token").post(getLinkToken);

module.exports = router;
