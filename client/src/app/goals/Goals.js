import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, ProgressBar } from "react-bootstrap";

const balanceGoalPercentage = 100;
const incomeGoalPercentage = 50;
const spendingGoalPercentage = 79;

const Goals = () => {
  const [balanceVariantColor, setBalanceVariantColor] = useState("primary");
  const [incomeVariantColor, setIncomeVariantColor] = useState("primary");
  const [spendingVariantColor, setSpendingVariantColor] = useState("primary");

  const getBalanceVariant = () => {
    if (balanceGoalPercentage < 33) {
      setBalanceVariantColor("danger");
    } else if (balanceGoalPercentage > 33 && balanceGoalPercentage < 66) {
      setBalanceVariantColor("warning");
    } else if (balanceGoalPercentage > 66 && balanceGoalPercentage <= 99) {
      setBalanceVariantColor("primary");
    } else {
      setBalanceVariantColor("success");
    }
  };

  const getIncomeVariant = () => {
    if (incomeGoalPercentage < 33) {
      setIncomeVariantColor("danger");
    } else if (incomeGoalPercentage > 33 && incomeGoalPercentage < 66) {
      setIncomeVariantColor("warning");
    } else if (incomeGoalPercentage > 66 && incomeGoalPercentage <= 99) {
      setIncomeVariantColor("primary");
    } else {
      setIncomeVariantColor("success");
    }
  };

  const getSpendingVariant = () => {
    if (spendingGoalPercentage < 33) {
      setSpendingVariantColor("success");
    } else if (spendingGoalPercentage > 33 && spendingGoalPercentage < 75) {
      setSpendingVariantColor("warning");
    } else {
      setSpendingVariantColor("danger");
    }
  };

  useEffect(() => {
    getBalanceVariant();
    getIncomeVariant();
    getSpendingVariant();
  }, []);

  return (
    <Container fluid>
      <Row className="grid-margin">
        <Col md={10} lg={4} xl={10} className="mx-auto">
          <Card className="bg-white">
            <Card.Header className="bg-light">
              <Card.Title as="h2" className="text-dark text-center">
                GOALS TRACKER
              </Card.Title>
            </Card.Header>
            <Card.Body className="">
              <Card className="d-flex bg-light text-dark flex-row align-center justify-center">
                <div className="w-25 my-auto">
                  <h3>Balance</h3>
                </div>
                <div className="w-75 my-auto">
                  <ProgressBar
                    variant={balanceVariantColor}
                    now={balanceGoalPercentage}
                    label={`${balanceGoalPercentage}%`}
                    className="bg-light border border-dark"
                  />
                </div>
              </Card>
              <Card className="d-flex bg-light text-dark flex-row align-center justify-center">
                <div className="w-25 my-auto">
                  <h3>Spending</h3>
                </div>
                <div className="w-75 my-auto">
                  <ProgressBar
                    variant={spendingVariantColor}
                    now={spendingGoalPercentage}
                    label={`${spendingGoalPercentage}%`}
                    className="bg-light border border-dark"
                  />
                </div>
              </Card>
              <Card className="d-flex bg-light text-dark flex-row align-center justify-center">
                <div className="w-25 my-auto">
                  <h3>Income</h3>
                </div>
                <div className="w-75 my-auto">
                  <ProgressBar
                    variant={incomeVariantColor}
                    now={incomeGoalPercentage}
                    label={`${incomeGoalPercentage}%`}
                    className="bg-light border border-dark"
                  />
                </div>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="grid-margin">
        <Col>
          <Card className="bg-white"></Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Goals;
