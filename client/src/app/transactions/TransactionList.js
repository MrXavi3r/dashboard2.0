import React, { useEffect, useContext } from "react";
import { Col, Card, Table } from "react-bootstrap";
import { TransactionsContext } from "../../context/TransactionsState";
// import { transactions } from "../data";

const TransactionList = () => {
  const { getTransactions, transactions, deleteTransaction } =
    useContext(TransactionsContext);

  useEffect(() => {
    getTransactions();
  }, []);

  const formatDate = (date) => {
    let transDate = new Date(date);
    let day = String(transDate.getDate()).padStart(2, "0");
    let month = String(transDate.getMonth() + 1).padStart(2, "0");
    let formattedDate = `${month}/${day}`;
    return formattedDate;
  };

  return (
    <Col sm={10} md={10} lg={12} xl={12} className="mx-auto">
      <Card className="bg-light shadow">
        <Card.Header className="bg-primary">
          <Card.Title as="h4" className="text-light mb-0 p-2">
            Transactions List
          </Card.Title>
        </Card.Header>
        <Card.Body>
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
              {transactions.map((transaction) => {
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
                    <td>
                      <button
                        onClick={() => deleteTransaction(transaction._id)}
                        className="border border-0 rounded-circle text-danger"
                      >
                        x
                      </button>
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

export default TransactionList;
