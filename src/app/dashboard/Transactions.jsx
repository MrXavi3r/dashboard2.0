import React from "react";
import { Col, Card, Table } from "react-bootstrap";

export const Transactions = () => {
  return (
    <Col md={8} xl={8} className="grid-margin">
      <Card className="bg-light">
        <Card.Header className="bg-success">
          <Card.Title as="h4" className="text-light mb-0 p-2 text-center">
          <i className="mdi mdi-chart-line pr-2 mdi-24px"></i>{" "}Recent Transactions
          </Card.Title>
        </Card.Header>

        <Card.Body className="">
          <Table responsive hover className="text-dark">
            <tbody>
              <tr>
                <td>
                  <i className="mdi mdi-currency-usd text-success mdi-24px"></i>
                </td>
                <td>NBA Contract</td>
                <td>2/20</td>
                <td>salary</td>
                <td className="text-success">+$19,543,888</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};
