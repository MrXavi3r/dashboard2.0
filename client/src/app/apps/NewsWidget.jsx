import React, { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import axios from "axios";

export const NewsWidget = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [newsWidgetStatusColor, setNewsWidgetStatusColor] = useState("gray");

  useEffect(() => {
    async function fetchNewsData() {
      let response = await axios.get("/api/v1/news_data");
      setNewsArticles(response.data);
      setNewsWidgetStatusColor("success");
    }
    fetchNewsData();
  }, []);

  return (
    <Col md={6} xl={8} className="grid-margin">
      <Card className="bg-light text-dark shadow">
        <Card.Header className="bg-danger d-flex align-items-center justify-content-between">
          <Card.Title as="h4" className="mb-0 p-0 text-white text-center">
            <i className="mdi mdi-newspaper pr-2 text-dark mdi-24px"></i> News
          </Card.Title>
          <i className={`fa fa-circle text-${newsWidgetStatusColor} fa-lg`} />
        </Card.Header>
        <Card.Body className="p-0">
          {newsArticles && newsArticles.length ? (
            newsArticles.map((article, index) => {
              return (
                <a
                  key={index}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2"
                >
                  <div className="py-1 d-flex flex-column flex-xl-row justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
                    <div className="d-flex align-items-center col">
                      <img
                        src={article.urlToImage}
                        className="rounded mx-1"
                        alt="not available"
                        style={{ width: "inherit", height: "inherit" }}
                      />
                    </div>
                    <div className="col-lg-12 col-xl-8 d-flex flex-column justify-content-between">
                      <h5>{article.title}</h5>
                      <p className="mb-0 text-dark">
                        {article.description &&
                          article.description.substring(0, 200)}
                        ...
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="text-dark">
                          {article.source && article.source.name}
                        </span>
                        <span className="text-dark">
                          {article.author ? article.author : "N/A"}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              );
            })
          ) : (
            <h4 className="text-center my-4 text-danger text-uppercase">
              news feed offline
            </h4>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
};
