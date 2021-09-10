import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import axios from "axios";
const marketsApiKey = process.env.REACT_APP_MARKETS_KEY;
let url = `https://api.twelvedata.com/time_series?`;
let params = `&interval=1day&previous_close=true&outputsize=1&dp=2&apikey=`;

let tickers = [
  {
    symbol: "TSLA",
    values: null,
  },
  {
    symbol: "BTC/USD",
    values: null,
  },
  {
    symbol: "AAPL",
    values: null,
  },
  {
    symbol: "AAPL",
    values: null,
  },
  {
    symbol: "XAU/USD",
    values: null,
  },
];
export const MarketWatchWidget = () => {
  const [widgetStatusColor, setWidgetStatusColor] = useState("gray");
  const [marketData, setMarketData] = useState(tickers);

  async function fetchMarketData(ticker) {
    try {
      let data = await axios.get(
        url + "symbol=" + ticker + params + marketsApiKey
      );
      return data.data.values;
    } catch (error) {
      console.log(error);
    }
  }

  const getValues = () => {
    marketData.forEach((ticker) => {
      let data = fetchMarketData(ticker.symbol);
      setMarketData(...marketData, (ticker.values = data));
    });
    setWidgetStatusColor("success");
  };

  return (
    <Col md={6} xl={4} className="grid-margin">
      <Card className="bg-light text-dark">
        <Card.Header className="bg-primary d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="text-white mb-0">
            <i className="mdi mdi-chart-line pr-2 text-success mdi-24px"></i>{" "}
            Market Watch
          </Card.Title>
          <button
            className="rounded-circle border border-0 bg-primary"
            onClick={() => getValues()}
          >
            <i className={`fa fa-circle text-${widgetStatusColor} fa-lg`} />
          </button>
        </Card.Header>
        <Card.Body className="pb-0">
          <ul>
            {marketData.length &&
              marketData.map((symbol, index) => {
                return (
                  <li
                    key={index}
                    className="d-flex align-items-center justify-content-between border border-0 border-dark"
                  >
                    <p>{symbol.symbol}</p>
                    <span className="">
                      {symbol.values ? symbol.values.close : "N/A"}
                    </span>
                  </li>
                );
              })}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};
