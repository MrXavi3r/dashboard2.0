import React, { useState, useEffect, useContext, useRef } from "react";
import GlobalContext from "../../context/GlobalState";
import { Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddTransaction = () => {
  const [isIncome, setIsIncome] = useState(false);
  const incomeRef = useRef(null);

  useEffect(() => {
    let currentRef = incomeRef.current

    if (incomeRef && currentRef) {
      currentRef.addEventListener("ontoggle", setIsIncome(true));

      return () => {
        currentRef.removeEventListener("ontoggle", setIsIncome(false));
      };
    }
  }, [incomeRef]);

  console.log(incomeRef);

  return (
    <Col>
      <Card className="bg-light">
        <Card.Header>
          <Card.Title as="h3" className="text-dark mb-0 p-2 text-center">
            Add Transaction
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Form noValidate>
            <Form.Group className="mt-1">
              <Col md={8}>
                <Form.Label className="text-dark">Name</Form.Label>
                <Form.Control type="text" className="bg-light text-dark" />
              </Col>
            </Form.Group>

            <Form.Group className="mt-1">
              <Col md={4}>
                <div className="d-flex justify-content-between">
                  <Form.Check
                    type="radio"
                    label="income"
                    name="type"
                    id="income"
                    ref={incomeRef}
                  />
                  <Form.Check
                    type="radio"
                    label="expense"
                    name="type"
                    id="expense"
                    defaultChecked
                  />
                </div>
                <Form.Label className="text-dark">Amount</Form.Label>
                <Form.Control type="number" min={0} className="bg-light text-dark" />
              </Col>
            </Form.Group>

            <Form.Group className="mt-1">
              <Col md={4}>
                <Form.Label className="text-dark">Date</Form.Label>
                <Form.Control type="date" className="bg-light text-dark" />
              </Col>
            </Form.Group>

            <Form.Group className="mt-1">
              <Col>
                <Form.Label className="d-flex text-dark mr-3">
                  Category
                </Form.Label>
                <select
                  className="form-select"
                  aria-label="Category"
                  disabled={isIncome}
                >
                  <option>select a category</option>
                  <option value="housing">Housing</option>
                  <option value="utilities">Utilities</option>
                  <option value="food/dining">Food/Dining</option>
                  <option value="clothing/apparel">Clothing/Apparel</option>
                  <option value="entertainment/leisure">
                    Entertainment/Leisure
                  </option>
                  <option value="personal care">Personal Care</option>
                  <option value="medical">Medical</option>
                  <option value="big ticket items">Big Ticket Items</option>
                  <option value="transportation">Transportation</option>
                  <option value="health/fitness">Health/Fitness</option>
                  <option value="other">Other</option>
                </select>
              </Col>
            </Form.Group>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="lg"
                type="submit"
                className="btn-block"
              >
                <h4 className="m-0">SUBMIT</h4>
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AddTransaction;
