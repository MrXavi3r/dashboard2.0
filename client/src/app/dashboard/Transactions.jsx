import React, { useEffect, useContext } from "react";
import { Col, Card, Table } from "react-bootstrap";
import { transactions } from "../data";

export const Transactions = () => {
  return (
    <Col md={8} xl={8} className="grid-margin">
      <Card className="bg-light">
        <Card.Header className="bg-success">
          <Card.Title as="h4" className="text-light mb-0 p-2">
            <i className="mdi mdi-chart-line pr-2 mdi-24px"></i> Recent
            Transactions
          </Card.Title>
        </Card.Header>

        <Card.Body className="">
          <Table responsive hover className="text-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 6).map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <i className="mdi mdi-currency-usd text-success mdi-24px"></i>
                    </td>
                    <td className="text-capitalize">{transaction.text}</td>
                    <td>{transaction.date}</td>
                    <td className="text-capitalize">{transaction.category}</td>
                    <td
                      className={
                        transaction.amount > 0 ? "text-success" : "text-danger"
                      }
                    >
                      {transaction.amount.toLocaleString("en-us")}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};
