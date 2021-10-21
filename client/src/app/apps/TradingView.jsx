import React, { useEffect, useRef, useState } from "react";
import { Col, Card } from "react-bootstrap";
import { settingsJSON } from "../data";

const TradingView = () => {
  const [widgetStatusColor, setWidgetStatusColor] = useState("success");
  const scriptRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify(settingsJSON);
    scriptRef.current.appendChild(script);
  }, []);

  return (
    <Col md={12} xl={4} className="grid-margin">
      <Card className="bg-light text-dark shadow" style={{ height: "820px" }}>
        <Card.Header className="bg-primary d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="text-white mb-0">
            Market Watch
          </Card.Title>
          <i className={`fa fa-circle text-${widgetStatusColor} fa-lg`} />
        </Card.Header>
        <Card.Body className="p-0">
          <div className="tradingview-widget-container" ref={scriptRef}>
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="blue-text"></span>
              </a>{" "}
              Courtesy: TradingView
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TradingView;
