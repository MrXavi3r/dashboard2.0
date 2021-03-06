import React, { useState, useEffect, useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { MarketDataContext } from "../../context/MarketDataState";

export const MarketWatchWidget = () => {
  const [widgetStatusColor, setWidgetStatusColor] = useState("gray");
  const { getData, marketData } = useContext(MarketDataContext);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    marketData.length
      ? setWidgetStatusColor("success")
      : setWidgetStatusColor("gray");
  }, [marketData]);

  return (
    <Col md={6} xl={4} className="grid-margin">
      <Card className="bg-light text-dark shadow">
        <Card.Header className="bg-primary d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="text-white mb-0">
            <i className="mdi mdi-chart-timeline-variant pr-2 text-success mdi-24px">
              {" "}
            </i>
            Market Watch
          </Card.Title>
          <i className={`fa fa-circle text-${widgetStatusColor} fa-lg`} />
        </Card.Header>
        <Card.Body className="">
          <ul>
            {marketData && marketData.length ? (
              marketData.map((ticker, index) => {
                return (
                  <li
                    key={index}
                    className="d-flex align-items-center justify-content-between border border-0 my-2 p-2 rounded shadow"
                  >
                    <div className="d-flex flex-column">
                      <h5 className="mb-0 text-uppercase"> {ticker.symbol} </h5>
                      <small className="text-muted">
                        {ticker.meta.exchange || ticker.meta.type}
                      </small>
                    </div>
                    <div className="flex-1">
                      <span
                        className={
                          ticker.values[0].previous_close >
                          ticker.values[0].close
                            ? "text-danger"
                            : "text-success"
                        }
                      >
                        {ticker.values[0].close || "N/A"}
                      </span>
                    </div>
                  </li>
                );
              })
            ) : (
              <h4 className="text-danger text-center">MARKET DATA OFFLINE</h4>
            )}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};
