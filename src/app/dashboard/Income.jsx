import React from "react";
import { Col, Card } from "react-bootstrap";

export const Income = () => {
  return (
    <Col md={6} xl={4} sm={6} className="grid-margin">
      <Card className="bg-light text-dark border-gray">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="mb-4">Income (month to date)</h6>
            <div className="icon icon-box-success ">
              <span className="mdi mdi-arrow-top-right icon-item"></span>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="d-flex align-items-center">
                $24,459.95
              </h3>
            </div>

            <div className="col-3 text-right">
              <p className="mb-0">50%</p>
            </div>
          </div>
          <div className="progress" style={{ height: "7px" }}>
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "50%" }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
