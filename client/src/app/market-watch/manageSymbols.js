import React, { useEffect, useContext, useState } from "react";
import { MarketDataContext } from "../../context/MarketDataState";
import {
  Container,
  Col,
  Row,
  Card,
  Table,
  Form,
  Button,
} from "react-bootstrap";

const ManageSymbols = () => {
  const [tickerString, setTickerString] = useState("");
  const { getTickers, tickerSymbols, deleteTicker, addTicker } =
    useContext(MarketDataContext);

  useEffect(() => {
    getTickers();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8} xl={8} className="mx-auto d-flex flex-column">
          <Card className="bg-light text-dark">
            <Card.Body>
              <Table borderless className="">
                <tbody>
                  {tickerSymbols.map((ticker) => {
                    return (
                      <tr className="d-flex align-items-center justify-content-around">
                        <td className="w-75 text-center text-dark">
                          <h5 className="mb-0 text-uppercase">
                            {ticker.ticker}
                          </h5>
                        </td>
                        <td className="p-0 w-75 text-center">
                          <button
                            onClick={() => deleteTicker(ticker._id)}
                            className="bg-danger rounded-circle border border-0"
                          >
                            <h5 className="text-dark text-center p-0 m-0">X</h5>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
          <Card className="bg-light text-dark">
            <Card.Body className="mx-auto">
              <ul>
                <li>Add symbols for the MarketWatch widget to watch</li>
                <li>Up to 5 symbols may be stored at a time</li>
                <li>Delete symbols as needed in the list above</li>
              </ul>
              <Form onSubmit={() => addTicker(tickerString)}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder={
                      tickerSymbols.length > 4
                        ? "remove a symbol to add another"
                        : "Add Symbol"
                    }
                    className="bg-light w-50 mx-auto"
                    value={tickerString}
                    onChange={(e) => setTickerString(e.target.value)}
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button
                    disabled={tickerSymbols.length > 4}
                    type="submit"
                    variant="info"
                    className=""
                  >
                    Submit
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageSymbols;
