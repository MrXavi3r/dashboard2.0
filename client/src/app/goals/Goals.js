import React, { useState, useEffect } from "react";
import { Container, Card, Col, Row, ProgressBar, Nav } from "react-bootstrap";

const balanceGoalPercentage = 40;
const incomeGoalPercentage = 100;
const spendingGoalPercentage = 84;

const Goals = () => {
  const [balanceVariantColor, setBalanceVariantColor] = useState("primary");
  const [incomeVariantColor, setIncomeVariantColor] = useState("primary");
  const [spendingVariantColor, setSpendingVariantColor] = useState("primary");
  const [activeKey, setActiveKey] = useState("overview");

  const colorSelect = (num, type) => {
    if (type === "income" && num < 33) {
      setIncomeVariantColor("danger");
    } else if (type === "balance" && num < 33) {
      setBalanceVariantColor("danger");
    } else if (type === "income" && num > 33 && num < 66) {
      setBalanceVariantColor("warning");
    } else if (type === "income" && num > 66 && num < 99) {
      setIncomeVariantColor("primary");
    } else if (type === "income" && num > 99) {
      setIncomeVariantColor("success");
    } else if (type === "spending" && num < 33) {
      setSpendingVariantColor("success");
    } else if (type === "spending" && num > 33 && num < 75) {
      setSpendingVariantColor("warning");
    } else if (type === "spending" && num > 75) {
      setSpendingVariantColor("danger");
    } else if (type === "balance" && num > 33 && num < 66) {
      setBalanceVariantColor("warning");
    } else if (type === "balance" && num > 66 && num < 99) {
      setBalanceVariantColor("primary");
    } else {
      setBalanceVariantColor("success");
    }
  };

  const handleSelect = (key) => {
    setActiveKey(key);
  };

  useEffect(() => {
    colorSelect(spendingGoalPercentage, "spending");
    colorSelect(incomeGoalPercentage, "income");
    colorSelect(balanceGoalPercentage, "balance");
  }, []);

  return (
    <Container className="p-0">
      <Row className="grid-margin">
        <Col className="p-0">
          <Card className="bg-white shadow">
            <Card.Header>
              <Nav
                variant="pills"
                defaultActiveKey="overview"
                onSelect={handleSelect}
              >
                <Nav.Item>
                  <Nav.Link eventKey="overview">Overview</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="balance">Balance</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="spending">Spending</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="income">Income</Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card
                className={activeKey === "overview" ? "bg-white" : "d-none"}
              >
                <Card.Header className="">
                  <Card className="d-flex bg-light text-dark flex-row align-center justify-center grid-margin border-0">
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
                  <Card className="d-flex bg-light text-dark flex-row align-center justify-center grid-margin border-0">
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
                  <Card className="d-flex bg-light text-dark flex-row align-center justify-center grid-margin border-0">
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
                </Card.Header>
                <Card.Body className=""></Card.Body>
              </Card>
              <Card className={activeKey === "balance" ? "bg-white" : "d-none"}>
                <div className="text-dark">
                  <h1>Balance</h1>
                </div>
              </Card>
              <Card
                className={activeKey === "spending" ? "bg-white" : "d-none"}
              >
                <div className="text-dark">
                  <h1>Spending</h1>
                </div>
              </Card>
              <Card className={activeKey === "income" ? "bg-white" : "d-none"}>
                <div className="text-dark">
                  <h1>Income</h1>
                </div>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Goals;
