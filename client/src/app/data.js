export const transactions = [
  {
    amount: -9865,
    category: "big ticket items",
    createdAt: "2021-09-20T13:55:31.666Z",
    date: "2021-09-14T00:00:00.000Z",
    text: "Super Expensive",
    __v: 0,
    _id: "614892d3eec42b5cc4e8c357",
  },
  {
    amount: -7865,
    category: "big ticket items",
    createdAt: "2021-09-20T15:07:38.037Z",
    date: "2021-09-14T00:00:00.000Z",
    text: "large painting",
    __v: 0,
    _id: "6148a3ba996fc96f23ddee90",
  },
  {
    amount: -7865,
    category: "big ticket items",
    createdAt: "2021-09-20T15:51:34.239Z",
    date: "2021-09-14T00:00:00.000Z",
    text: "large painting",
    __v: 0,
    _id: "6148ae06996fc96f23ddee94",
  },
  {
    amount: 56299,
    category: "income",
    createdAt: "2021-09-20T16:21:12.083Z",
    date: "2021-09-08T00:00:00.000Z",
    text: "payment",
    __v: 0,
    _id: "6148b4f84b6ed99d3deead3a",
  },
  {
    amount: -562,
    category: "health/fitness",
    createdAt: "2021-09-20T16:21:12.083Z",
    date: "2021-09-08T00:00:00.000Z",
    text: "training session",
    __v: 0,
    _id: "6148b4f84b6ed99d3deead3a",
  },
  {
    amount: -240,
    category: "entertainment/leisure",
    createdAt: "2021-09-20T16:41:37.032Z",
    date: "2021-09-16T00:00:00.000Z",
    text: "Massage",
    __v: 0,
    _id: "6148b9c1bd3112c9f5a9873b",
  },
];

export const categories = [
  "housing",
  "utilities",
  "food/dining",
  "clothing/apparel",
  "transportation",
  "entertainment/leisure",
  "health/fitness",
  "personal care",
  "medical",
  "big ticket items",
  "other",
];

export const todoData = [
  {
    id: 1,
    task: "open investment account",
    isCompleted: false,
  },
  {
    id: 2,
    task: "apply for credit card",
    isCompleted: true,
  },
  {
    id: 3,
    task: "consolidate credit card debt",
    isCompleted: false,
  },
  {
    id: 4,
    task: "refinance mortgage",
    isCompleted: false,
  },
];

export const events = [
  {
    title: "birthday",
    start: "2021-10-19T00:00:00.000Z",
    end: "2021-10-19T00:01:00.000Z",
    allDay: false,
    resource: "any",
  },
];

export const suggestionsData = [
  {
    id: 17698,
    title: "Cut down on your entertainment expenditure",
    desc: "Models suggest if you reduce your entertainment expenditure by 20% you would reach your monthly savings goal with 11 days to spare.",
    icon: "currency-usd-off",
    bgc: "danger",
  },
  {
    id: 87091,
    title: "You may benefit from a no interest balance transfer credit card",
    desc: "Your monthly credit card payments may not be covering interest charges. Considering applying for a 0% interest credit card and transferring the balance to save money on any current charges.",
    icon: "credit-card-scan",
    bgc: "info",
  },
  {
    id: 42365,
    title: "An investment account may help you with your long term goal",
    desc: "Consider speaking with a financial advisor about your plans to purchase a home and ways to effectively reach your goal.",
    icon: "scale-balance",
    bgc: "success",
  },
  {
    id: 10939,
    title: "Unusually high utility expenditure",
    desc: "Your utility expenditures are 27% above the national average. Consider investigating ways in which to reduce your utility overhead.",
    icon: "lightbulb-outline",
    bgc: "warning",
  },
];

export const settingsJSON = {
  colorTheme: "light",
  dateRange: "1D",
  showChart: true,
  locale: "en",
  width: "100%",
  height: "100%",
  largeChartUrl: "",
  isTransparent: false,
  showSymbolLogo: true,
  showFloatingTooltip: false,
  plotLineColorGrowing: "rgba(41, 98, 255, 1)",
  plotLineColorFalling: "rgba(41, 98, 255, 1)",
  gridLineColor: "rgba(240, 243, 250, 0)",
  scaleFontColor: "rgba(120, 123, 134, 1)",
  belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
  belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
  belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
  belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
  symbolActiveColor: "rgba(41, 98, 255, 0.12)",
  tabs: [
    {
      title: "Stocks",
      symbols: [
        {
          s: "NASDAQ:AAPL",
          d: "Apple, Inc",
        },
        {
          s: "NASDAQ:TSLA",
          d: "Tesla, Inc",
        },
        {
          s: "NASDAQ:FB",
          d: "Facebook, Inc",
        },
        {
          s: "NASDAQ:AMZN",
          d: "Amazon.com, Inc",
        },
        {
          s: "NASDAQ:GOOGL",
          d: "Alphabet, Inc",
        },
        {
          s: "NASDAQ:NFLX",
          d: "Netflix, Inc",
        },
        {
          s: "NASDAQ:MSFT",
          d: "Microsoft Corp",
        },
        {
          s: "NASDAQ:INTC",
          d: "Intel Corp",
        },
      ],
      originalTitle: "Bonds",
    },
    {
      title: "Forex",
      symbols: [
        {
          s: "FX:EURUSD",
        },
        {
          s: "FX:GBPUSD",
        },
        {
          s: "FX:USDJPY",
        },
        {
          s: "FX:USDCHF",
        },
        {
          s: "FX:AUDUSD",
        },
        {
          s: "FX:USDCAD",
        },
        {
          s: "OANDA:XAUUSD",
          d: "GOLD / U.S. DOLLAR",
        },
      ],
      originalTitle: "Forex",
    },
    {
      title: "Crypto",
      symbols: [
        {
          s: "BITSTAMP:BTCUSD",
          d: "BITCOIN / U.S. DOLLAR",
        },
        {
          s: "COINBASE:ETHUSD",
          d: "ETHEREUM / U.S. DOLLAR",
        },
        {
          s: "FTX:SOLUSD",
          d: "SOLANA / U.S. DOLLAR",
        },
        {
          s: "BITTREX:DOGEUSD",
          d: "DOGECOIN / U.S. DOLLAR",
        },
        {
          s: "BITSTAMP:XRPUSD",
          d: "RIPPLE / U.S. DOLLAR",
        },
        {
          s: "FTX:HNTUSD",
          d: "HELIUM / U.S. DOLLAR",
        },
        {
          s: "COINBASE:SHIBUSD",
          d: "SHIBA / U.S. DOLLAR",
        },
      ],
    },
    {
      title: "Indices",
      symbols: [
        {
          s: "FOREXCOM:SPXUSD",
          d: "S&P 500",
        },
        {
          s: "FOREXCOM:NSXUSD",
          d: "Nasdaq 100",
        },
        {
          s: "FOREXCOM:DJI",
          d: "Dow 30",
        },
        {
          s: "INDEX:NKY",
          d: "Nikkei 225",
        },
        {
          s: "INDEX:DEU40",
          d: "DAX Index",
        },
        {
          s: "FOREXCOM:UKXGBP",
          d: "UK 100",
        },
      ],
      originalTitle: "Indices",
    },
    {
      title: "Futures",
      symbols: [
        {
          s: "CME_MINI:ES1!",
          d: "S&P 500",
        },
        {
          s: "CME:6E1!",
          d: "Euro",
        },
        {
          s: "COMEX:GC1!",
          d: "Gold",
        },
        {
          s: "NYMEX:CL1!",
          d: "Crude Oil",
        },
        {
          s: "NYMEX:NG1!",
          d: "Natural Gas",
        },
        {
          s: "CBOT:ZC1!",
          d: "Corn",
        },
      ],
      originalTitle: "Futures",
    },
  ],
};
