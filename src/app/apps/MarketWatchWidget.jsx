import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";

const marketsApiKey = process.env.REACT_APP_MARKETS_KEY;
let tickers = "TSLA,BTC/USD,AMZN,AAPL,XAU/USD";
let url = `https://api.twelvedata.com/time_series?symbol=${tickers}&interval=1day&previous_close=true&outputsize=1&dp=2&format=JSON&apikey=${marketsApiKey}`;

export const MarketWatchWidget = () => {
  const [widgetStatusColor, setWidgetStatusColor] = useState("gray");
  const [marketData, setMarketData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMarketData() {
      const response = await fetch(url);
      const data = await response.json();
      setMarketData(data);
      setWidgetStatusColor("success");
      setLoading(false);
    }
    // fetchMarketData();
  }, []);

  if (loading) {
    return (
      <Col md={6} xl={6} className="grid-margin">
        <Card className="bg-light text-dark">
          <Card.Header className="bg-info d-flex align-items-center justify-content-between">
            <Card.Title as="h4" className="text-white mb-0">
              Market Watch
            </Card.Title>
            <i className={`fa fa-circle text-${widgetStatusColor}`} />
          </Card.Header>
          <Card.Body className="pb-0">
            <h4 className="text-center pb-2 text-danger">
              market data unavailable
            </h4>
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    <Col md={6} xl={4}>
      <Card className="bg-light text-dark">
        <Card.Header className="bg-info d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="text-white mb-0">
            Market Watch
          </Card.Title>
          <i className={`fas fa-circle text-c-${widgetStatusColor} f-20`} />
        </Card.Header>
        <Card.Body className="pb-0">
          {marketData.map((symbol, index) => {
            console.log(marketData);
            return (
              <div className="row" key={index}>
                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-btc f-20 m-r-10 text-c-yellow" />
                    {symbol.symbol}
                  </h6>
                  <h6 className="align-items-center float-right">
                    {symbol.values}{" "}
                    <i
                      className={`feather icon-arrow-${
                        symbol.values > symbol.values ? "up" : "down"
                      } text-c-${
                        symbol.values > symbol.values ? "green" : "red"
                      } f-18`}
                    />
                  </h6>
                  <div
                    className="progress m-t-30 m-b-10"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </Card.Body>
      </Card>
    </Col>
  );
};