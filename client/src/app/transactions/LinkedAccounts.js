import React, { useEffect, useContext } from "react";
import Link from "../plaid/Link";
import { Col, Card, Button, Table } from "react-bootstrap";
import { PlaidContext } from "../../context/PlaidState";

const LinkedAccounts = () => {
  const { transactions, plaidTransactions, createLinkToken, accessToken } =
    useContext(PlaidContext);

  useEffect(() => {
    createLinkToken();
  }, []);

  useEffect(() => {
    accessToken && plaidTransactions(accessToken);
  }, [accessToken]);

  return (
    <Col
      className="mx-auto d-flex flex-column shadow p-3 rounded"
      md={12}
      xl={8}
    >
      <Card className="border-0 bg-white">
        <Card.Header className="bg-white border-0 text-dark my-auto">
          <h3 className="mb-0">Connect Bank</h3>
          <p className="mb-0">
            powered by <b className="text-info">Plaid</b>&#174;
          </p>
        </Card.Header>
        <Card.Body className="bg-white text-dark">
          <p className="mb-4">
            Securely link bank accounts and credit cards to DASHBOARD via the
            Plaid API in order to track real time balances, transaction data,
            investment information, and more. You may link as many bank accounts
            as you like. An overview of your linked accounts will appear here
            below. Click the launch button to link a new account.
          </p>
          {/* <Button className="w-25 py-3 bg-dark d-flex align-items-center justify-content-between">
            <h4 className="mb-0">Launch Link</h4>
            <h4 className="mb-0">&gt;</h4>
          </Button> */}
          <Link />
        </Card.Body>
      </Card>
      {transactions?.length && (
        <Card>
          <Card.Header className="bg-primary">
            <Card.Title as="h4" className="text-light mb-0 p-2">
              Transactions List
            </Card.Title>
          </Card.Header>
          <Card.Body className="p-0">
            <Table responsive borderless className="text-dark">
              <thead className="bg-info text-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Category</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody className="bg-light text-dark">
                {transactions.map((transaction) => {
                  return (
                    <tr key={transaction.transaction_id} className="shadow">
                      <td className="text-capitalize">
                        {transaction.name.substring(0, 20)}
                      </td>
                      <td className="text-capitalize">{transaction.date}</td>
                      <td className="text-capitalize">
                        {transaction.category}
                      </td>
                      <td
                        className={
                          transaction.amount > 0
                            ? "text-success"
                            : "text-danger"
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
      )}
    </Col>
  );
};

export default LinkedAccounts;
