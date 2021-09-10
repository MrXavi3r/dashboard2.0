import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
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
    symbol: "AMZN",
    values: null,
  },
  {
    symbol: "XAU/USD",
    values: null,
  },
];
export const MarketWatchWidget = () => {
  const [widgetStatusColor, setWidgetStatusColor] = useState("gray");
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    async function init() {
      let tickerData = [];
      for (let i = 0; i < tickers.length; i++) {
        let response = await fetch(
          url + "symbol=" + tickers[i].symbol + params + marketsApiKey
         );
        let data = await response.json()
        console.log(data)
        tickerData = [...tickerData, {symbol: data.meta.symbol,  values: data.values[0]}];
      }
      setMarketData([...tickerData]);
      setWidgetStatusColor("success");
    }
    init();
  }, []);

  return (
    <Col md={6} xl={4} className="grid-margin">
      <Card className="bg-light text-dark">
        <Card.Header className="bg-primary d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="text-white mb-0">
            <i className="mdi mdi-chart-line pr-2 text-success mdi-24px"> </i>
            Market Watch
          </Card.Title>
          <i className={`fa fa-circle text-${widgetStatusColor} fa-lg`} />
        </Card.Header>
        <Card.Body className="pb-0">
          <ul>
            {marketData.length ?
              marketData.map((ticker, index) => {
                return (
                  <li
                    key={index}
                    className="d-flex align-items-center justify-content-between border border-0 border-dark"
                  >
                    <p> {ticker.symbol} </p>
                    <span
                      className={
                        ticker.values.previous_close > ticker.values.close
                          ? "text-danger"
                          : "text-success"
                      }
                    >
                      {ticker.values ? ticker.values.close : "N/A"}
                    </span>
                  </li>
                );
              }) : "MARKET DATA OFFLINE"}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};
