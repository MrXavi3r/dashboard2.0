import React from "react";
import { Col, Card } from "react-bootstrap";
import PieDonutChart from "../charts/PieDonutChart";
export const PieWidget = () => {
  return (
    <Col md={4} xl={4} className="grid-margin">
      <Card className="mb-0 bg-light text-dark">
        <Card.Header className="bg-info">
          <Card.Title as="h4" className="text-white mb-0 p-2 text-center">
          <i className="mdi mdi-chart-bar pr-2 text-warning mdi-24px"></i>Expense Breakdown
          </Card.Title>
        </Card.Header>
        <Card.Body className="px-0 pb-0 d-flex align-items-center justify-content-center">
          <PieDonutChart />
        </Card.Body>
      </Card>
    </Col>
  );
};