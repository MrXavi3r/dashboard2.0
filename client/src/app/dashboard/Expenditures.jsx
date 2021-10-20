import React, { useEffect, useState, useContext } from "react";
import { Col, Card } from "react-bootstrap";
import { TransactionsContext } from "../../context/TransactionsState";
// import { transactions } from "../data";

export const Expenditures = () => {
  const [expenses, setExpenses] = useState(0);
  const { transactions } = useContext(TransactionsContext);

  useEffect(() => {
    let data = [];

    transactions.forEach((transaction) => {
      if (transaction.amount < 0) {
        data.push(transaction.amount);
      }
    });

    let total = data.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
    setExpenses(total.toLocaleString("en-us"));
  }, [transactions]);

  return (
    <Col md={6} xl={4} sm={6} className="grid-margin">
      <Card className="bg-light text-dark border-gray rounded-3 shadow">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="mb-4">
              Expenditures <small>(month to date)</small>
            </h6>
            <div className="icon icon-box-danger ">
              <span className="mdi mdi-arrow-top-right icon-item"></span>
            </div>
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-9">
              <h3 className="d-flex align-items-center m-b-0">${expenses}</h3>
            </div>

            <div className="col-3 text-right">
              <p className="mb-0">77% cap</p>
            </div>
          </div>
          <div className="progress" style={{ height: "7px" }}>
            <div
              className="progress-bar bg-danger"
              role="progressbar"
              style={{ width: "77%" }}
              aria-valuenow="77"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};
