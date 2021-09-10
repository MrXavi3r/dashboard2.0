import React from "react";
import { Col, Card } from "react-bootstrap";
export const Expenditures = () => {
  return (
    <Col md={6} xl={4} sm={6} className="grid-margin">
      <Card className="bg-light text-dark border-gray">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="mb-4">Expenditures <small>(month to date)</small></h6>
            <div className="icon icon-box-success ">
              <span className="mdi mdi-arrow-top-right icon-item"></span>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="d-flex align-items-center m-b-0">$2,942.32</h3>
            </div>

            <div className="col-3 text-right">
              <p className="mb-0">36%</p>
            </div>
          </div>
          <div className="progress" style={{ height: "7px" }}>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "35%" }}
              aria-valuenow="35"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};