const { Configuration, PlaidApi, PlaidEnvironments } = require("plaid");


const PLAID_CLIENT_ID = process.env.PLAID_CLIENT_ID;
const PLAID_SECRET = process.env.PLAID_SECRET;
const PLAID_ENV = process.env.PLAID_ENV || 'sandbox';

// PLAID_PRODUCTS is a comma-separated list of products to use when initializing
// Link. Note that this list must contain 'assets' in order for the app to be
// able to create and retrieve asset reports.
const PLAID_PRODUCTS = (process.env.PLAID_PRODUCTS || 'transactions').split(
  ',',
);


// PLAID_COUNTRY_CODES is a comma-separated list of countries for which users
// will be able to select institutions from.
const PLAID_COUNTRY_CODES = (process.env.PLAID_COUNTRY_CODES || 'US').split(
  ',',
);

// Parameter used for OAuth in Android. This should be the package name of your app,
// e.g. com.plaid.linksample
const PLAID_ANDROID_PACKAGE_NAME = process.env.PLAID_ANDROID_PACKAGE_NAME || '';

let ACCESS_TOKEN = null;
let PUBLIC_TOKEN = null;
let ITEM_ID = null;
let TRANSFER_ID = null;

const configuration = new Configuration({
  basePath: PlaidEnvironments[PLAID_ENV],
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": PLAID_CLIENT_ID,
      "PLAID-SECRET": PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(configuration);

const prettyPrintResponse = (res) => {
  console.log(util.inspect(res.data, { colors: true, depth: 4 }));
};

// Create a link token with configs which we can then use to initialize Plaid Link client-side.
// See https://plaid.com/docs/#create-link-token
exports.createLinkToken = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      const configs = {
        user: {
          // This should correspond to a unique id for the current user.
          client_user_id: "user-id",
        },
        client_name: "Plaid Test App",
        products: PLAID_PRODUCTS,
        country_codes: PLAID_COUNTRY_CODES,
        language: "en",
      };

      if (PLAID_ANDROID_PACKAGE_NAME !== "") {
        configs.android_package_name = PLAID_ANDROID_PACKAGE_NAME;
      }
      const createTokenResponse = await client.linkTokenCreate(configs);
      prettyPrintResponse(createTokenResponse);
      res.json(createTokenResponse.data);
    })
    .catch(next);
};

// @desc  exchange a Link public_token for an API access_token
// @ref  https://plaid.com/docs/#exchange-token-flow
exports.setAccessToken = async (req, res, next) => {
  PUBLIC_TOKEN = req.body.public_token;
  Promise.resolve()
    .then(async function () {
      const tokenResponse = await client.itemPublicTokenExchange({
        public_token: PUBLIC_TOKEN,
      });
      prettyPrintResponse(tokenResponse);
      ACCESS_TOKEN = tokenResponse.data.access_token;
      ITEM_ID = tokenResponse.data.item_id;
      if (PLAID_PRODUCTS.includes("transfer")) {
        TRANSFER_ID = await authorizeAndCreateTransfer(ACCESS_TOKEN);
      }
      res.json({
        access_token: ACCESS_TOKEN,
        item_id: ITEM_ID,
        error: null,
      });
    })
    .catch(next);
};

// @desc  Retrieve an Item's accounts
// @ref   https://plaid.com/docs/#accounts
exports.getAccounts = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      const accountsResponse = await client.accountsGet({
        access_token: ACCESS_TOKEN,
      });
      prettyPrintResponse(accountsResponse);
      res.json(accountsResponse.data);
    })
    .catch(next);
}

// @desc Retrieve real-time Balances for each of an Item's accounts
// @ref  https://plaid.com/docs/#balance
exports.getBalance = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      const balanceResponse = await client.accountsBalanceGet({
        access_token: ACCESS_TOKEN,
      });
      prettyPrintResponse(balanceResponse);
      res.json(balanceResponse.data);
    })
    .catch(next);
}

// @desc  Retrieve Transactions for an Item
// @ref   https://plaid.com/docs/#transactions
exports.getTransactions = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      // Pull transactions for the Item for the last 30 days
      const startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
      const endDate = moment().format('YYYY-MM-DD');
      const configs = {
        access_token: ACCESS_TOKEN,
        start_date: startDate,
        end_date: endDate,
        options: {
          count: 250,
          offset: 0,
        },
      };
      const transactionsResponse = await client.transactionsGet(configs);
      prettyPrintResponse(transactionsResponse);
      res.json(transactionsResponse.data);
    })
    .catch(next);
}


// @desc Retrieve Identity for an Item
// @ref  https://plaid.com/docs/#identity
exports.fetchItemIdentity = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      const identityResponse = await client.identityGet({
        access_token: ACCESS_TOKEN,
      });
      prettyPrintResponse(identityResponse);
      res.json({ identity: identityResponse.data.accounts });
    })
    .catch(next);
}


// @desc Retrieve information about an Item
// @ref https://plaid.com/docs/#retrieve-item
exports.fetchItemInfo = async (req, res, next) => {
  Promise.resolve()
    .then(async function () {
      // Pull the Item - this includes information about available products,
      // billed products, webhook information, and more.
      const itemResponse = await client.itemGet({
        access_token: ACCESS_TOKEN,
      });
      // Also pull information about the institution
      const configs = {
        institution_id: itemResponse.data.item.institution_id,
        country_codes: ['US'],
      };
      const instResponse = await client.institutionsGetById(configs);
      prettyPrintResponse(itemResponse);
      res.json({
        item: itemResponse.data.item,
        institution: instResponse.data.institution,
      });
    })
    .catch(next);
}

