import React, { useEffect, useContext } from "react";
import { Col, Card, Table } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalState";
// import { transactions } from "../data";

const TransactionList = () => {
  const { getTransactions, transactions, deleteTransaction } = useContext(GlobalContext);

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
      <Card className="bg-light">
        <Card.Header className="bg-primary">
          <Card.Title as="h4" className="text-light mb-0 p-2">
            Transactions List
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Table striped responsive className="text-dark">
            <thead>
              <tr>
                <th scope="col" className="border border-0">
                  Name
                </th>
                <th scope="col" className="border border-0">
                  Date
                </th>
                <th scope="col" className="border border-0">
                  Category
                </th>
                <th scope="col" className="border border-0">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                return (
                  <tr key={transaction._id}>
                    <td className="text-capitalize border border-0">
                      {transaction.text.substring(0, 20)}
                    </td>
                    <td className="text-capitalize border border-0">
                      {formatDate(transaction.date)}
                    </td>
                    <td className="text-capitalize border border-0">
                      {transaction.category}
                    </td>
                    <td
                      className={
                        transaction.amount > 0
                          ? "text-success border border-0"
                          : "text-danger border border-0"
                      }
                    >
                      {transaction.amount.toLocaleString("en-us")}
                    </td>
                    <td className="border border-0">
                      <button onClick={()=> deleteTransaction(transaction._id)} className="border border-0 rounded-circle text-danger">
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
