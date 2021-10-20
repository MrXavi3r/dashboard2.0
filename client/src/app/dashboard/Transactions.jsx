import React, { useContext } from "react";
import { Col, Card, Table } from "react-bootstrap";
import { TransactionsContext } from "../../context/TransactionsState";
// import { transactions } from "../data";

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext);

  const formatDate = (date) => {
    let transDate = new Date(date);
    let day = String(transDate.getDate()).padStart(2, "0");
    let month = String(transDate.getMonth() + 1).padStart(2, "0");
    let formattedDate = `${month}/${day}`;
    return formattedDate;
  };

  return (
    <Col md={8} xl={8} className="grid-margin">
      <Card className="bg-light shadow">
        <Card.Header className="bg-success">
          <Card.Title as="h4" className="text-light mb-0 p-2">
            <i className="mdi mdi-chart-line pr-2 mdi-24px"></i> Recent
            Transactions
          </Card.Title>
        </Card.Header>

        <Card.Body className="">
          <Table responsive borderless className="text-dark">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Category</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.slice(0, 6).map((transaction) => {
                return (
                  <tr key={transaction._id} className="shadow">
                    <td className="text-capitalize">
                      {transaction.text.substring(0, 20)}
                    </td>
                    <td className="text-capitalize">
                      {formatDate(transaction.date)}
                    </td>
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
