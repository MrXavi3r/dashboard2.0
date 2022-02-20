import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  ProgressBar,
  Nav,
  Form,
  Button,
} from "react-bootstrap";
import { GoalsContext } from "../../context/GoalsState";
import { TransactionsContext } from "../../context/TransactionsState";

const Goals = () => {
  const { goals, getGoals, updateGoal } = useContext(GoalsContext);
  const { balance, income, spending, getTransactions } = useContext(TransactionsContext);
  const [balanceInput, setBalanceInput] = useState(0);
  const [incomeInput, setIncomeInput] = useState(0);
  const [spendingInput, setSpendingInput] = useState(0);
  const [balanceVariantColor, setBalanceVariantColor] = useState("primary");
  const [incomeVariantColor, setIncomeVariantColor] = useState("primary");
  const [spendingVariantColor, setSpendingVariantColor] = useState("primary");
  const [activeKey, setActiveKey] = useState("overview");

  const balanceGoalMeter = Math.round((balance / goals.balance) * 100);
  const incomeGoalMeter = Math.round((income / goals.income) * 100);
  const spendingGoalMeter = Math.round(
    (Math.abs(spending) / goals.spending) * 100
  );

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
    colorSelect(spendingGoalMeter, "spending");
    colorSelect(incomeGoalMeter, "income");
    colorSelect(balanceGoalMeter, "balance");
  }, []);

  useEffect(() => {
    getTransactions();
    getGoals();
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
                className=""
              >
                <Nav.Item>
                  <Nav.Link
                    eventKey="overview"
                    className={
                      activeKey === "overview"
                        ? "bg-dark"
                        : "bg-white text-info"
                    }
                  >
                    Overview
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="balance"
                    className={
                      activeKey === "balance" ? "bg-dark" : "bg-white text-info"
                    }
                  >
                    Balance
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="spending"
                    className={
                      activeKey === "spending"
                        ? "bg-dark"
                        : "bg-white text-info"
                    }
                  >
                    Spending
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="income"
                    className={
                      activeKey === "income" ? "bg-dark" : "bg-white text-info"
                    }
                  >
                    Income
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card
                className={activeKey === "overview" ? "bg-white" : "d-none"}
              >
                <Card.Header className="bg-light rounded">
                  <Card className="d-flex bg-light text-dark flex-row align-center justify-center grid-margin border-0">
                    <div className="w-25 my-auto">
                      <h3>Balance</h3>
                    </div>
                    <div className="w-75 my-auto">
                      <ProgressBar
                        variant={balanceVariantColor}
                        now={balanceGoalMeter}
                        label={`${balanceGoalMeter}%`}
                        className="bg-dark border border-dark"
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
                        now={spendingGoalMeter}
                        label={`${spendingGoalMeter}%`}
                        className="bg-dark border border-dark"
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
                        now={incomeGoalMeter}
                        label={`${incomeGoalMeter}%`}
                        className="bg-dark border border-dark"
                      />
                    </div>
                  </Card>
                </Card.Header>
                {/* <Card.Body className=""></Card.Body> */}
              </Card>
              <Card
                className={
                  activeKey === "balance" ? "bg-white border-0" : "d-none"
                }
              >
                <div className="text-dark">
                  <Form
                    onSubmit={() =>
                      updateGoal(goals._id, { balance: balanceInput })
                    }
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Current Goal: $
                        {goals ? goals.balance?.toLocaleString("en-US") : 0}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="bg-white w-25"
                        value={balanceInput}
                        onChange={(e) => setBalanceInput(e.target.value)}
                      />
                      <Form.Text className="text-muted">
                        Enter to update your balance goal
                      </Form.Text>
                    </Form.Group>
                    <Button className="" type="submit" variant="info">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Card>
              <Card
                className={
                  activeKey === "spending" ? "bg-white border-0" : "d-none"
                }
              >
                <div className="text-dark">
                  <Form
                    onSubmit={() =>
                      updateGoal(goals._id, { spending: spendingInput })
                    }
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Current Goal: $
                        {goals ? goals.spending?.toLocaleString("en-US") : 0}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="bg-white w-25"
                        value={spendingInput}
                        onChange={(e) => setSpendingInput(e.target.value)}
                      />
                      <Form.Text className="text-muted">
                        Enter to update your spending goal
                      </Form.Text>
                    </Form.Group>
                    <Button className="" type="submit" variant="info">
                      Submit
                    </Button>
                  </Form>
                </div>
              </Card>
              <Card
                className={
                  activeKey === "income" ? "bg-white border-0" : "d-none"
                }
              >
                <div className="text-dark">
                  <Form
                    onSubmit={() =>
                      updateGoal(goals._id, { income: incomeInput })
                    }
                  >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Current Goal: $
                        {goals ? goals.income?.toLocaleString("en-US") : 0}
                      </Form.Label>
                      <Form.Control
                        type="number"
                        className="bg-white w-25"
                        value={incomeInput}
                        onChange={(e) => setIncomeInput(e.target.value)}
                      />
                      <Form.Text className="text-muted">
                        Enter to update your income goal
                      </Form.Text>
                    </Form.Group>
                    <Button className="" variant="info" type="submit">
                      Submit
                    </Button>
                  </Form>
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
