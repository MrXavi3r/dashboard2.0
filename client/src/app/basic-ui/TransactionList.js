import React, { useEffect, useContext } from 'react';
import { Col, Card, Table } from 'react-bootstrap';
import {GlobalContext} from '../../context/GlobalState'

const TransactionList = () => {
  const {getTransactions, transactions} = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  },[])

  const formatDate = (date) => {
    let transDate = new Date(date)
    let day = String(transDate.getDate()).padStart(2, '0');
    let month = String(transDate.getMonth() + 1).padStart(2, '0');
    let formattedDate = `${month}/${day}`
    return formattedDate
  }

    return (
      <Col sm={10} md={14} xl={12} className="mx-auto">
        <Card className="bg-light">
          <Card.Header className="bg-primary">
            <Card.Title as="h4" className="text-light mb-0 p-2">
              Transactions List
            </Card.Title>
          </Card.Header>
          <Card.Body>
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
              {transactions.map((transaction)=> {
                return (
                  <tr key={transaction._id}>
                    <td>
                      <i className="mdi mdi-currency-usd text-success mdi-24px"></i>
                    </td>
                    <td className="text-capitalize">{transaction.text.substring(0, 20)}</td>
                    <td>{formatDate(transaction.date)}</td>
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
    )
  
}

export default TransactionList
