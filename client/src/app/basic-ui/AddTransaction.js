import React, { useState, useEffect, useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { categories } from "../data";
import { Formik } from "formik";
import * as yup from "yup";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    data: {
      text: "",
      amount: 0,
      date: "",
      category: "",
    },
  });
  const [isIncome, setIsIncome] = useState(false);
  const incomeRef = useRef(null);

  const schema = yup.object().shape({
    text: yup.string().min(4, "must be at least 4 characters").required(),
    amount: yup.number().required().positive().integer(),
    date: yup.date().required(),
    category: yup.string().required(),
  });

  return (
    <Col className="mx-auto d-flex border p-3 rounded" md={12} xl={8}>
      <Card className="bg-info w-100 add-trans-info">
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-plus-box text-success m-1"></i>
          </span>
          <h5 className="text-light">Add A Transaction</h5>
          <p className="text-light">
            A complete history of all transactions may be viewed in the
            Transaction List under the Transactions Tab in the menu
          </p>
        </div>
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-check-bold text-success m-1"></i>
          </span>
          <h5 className="text-light">Validation</h5>
          <p className="text-light">
            Complete all fields to add a new entry. Income does not require a
            selected category. All amounts should be input as positive numbers
          </p>
        </div>
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-eye text-success m-1"></i>
          </span>
          <h5 className="text-light">Quick View</h5>
          <p className="text-light">
            The 6 most recent transactions may be found in the Recent
            Transactions widget on the dashboard
          </p>
        </div>
      </Card>
      <Card className="bg-light w-100">
        <Card.Body className="w-100">
          <Formik
            validationSchema={schema}
            initialValues={formData.data}
            onSubmit={console.log}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              handleBlur,
              touched,
              handleReset,
              isValid,
              isInValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit} className="">
                <Form.Group className="">
                  <div className="d-flex justify-content-around mb-0">
                    <Form.Check
                      type="radio"
                      label="Income"
                      name="type"
                      id="income"
                      ref={incomeRef}
                    />
                    <Form.Check
                      type="radio"
                      label="Expense"
                      name="type"
                      id="expense"
                      defaultChecked
                    />
                  </div>
                </Form.Group>

                <Form.Group as={Col} className="mt-1 mb-0">
                  <Form.Label className="text-dark">Text</Form.Label>
                  <Form.Control
                    type="text"
                    name="text"
                    value={values.text}
                    onChange={handleChange}
                    className="bg-light text-dark"
                    isValid={touched.text && !errors.text}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mt-3">
                  <Form.Label className="text-dark">Amount</Form.Label>
                  <Form.Control
                    type="number"
                    name="amount"
                    value={values.amount}
                    onChange={handleChange}
                    min={0}
                    className="bg-light text-dark"
                    isValid={touched.amount && !errors.amount}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mt-1">
                  <Form.Label className="text-dark">Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    className="bg-light text-dark"
                    isValid={touched.date && !errors.date}
                    onBlur={handleBlur}
                  />
                </Form.Group>

                <Form.Group as={Col} className="my-4">
                  <Form.Label className="d-flex text-dark mr-3">
                    Category
                  </Form.Label>
                  <select
                    className="form-select w-100"
                    name="category"
                    disabled={isIncome}
                    value={values.category}
                    onChange={handleChange}
                    isValid={touched.category}
                    onBlur={handleBlur}
                  >
                    <option value={null}>select a category</option>
                    {categories.map((category, index) => {
                      return (
                        <option
                          key={index}
                          value={category}
                          className="text-capitalize"
                        >
                          {category}
                        </option>
                      );
                    })}
                  </select>
                </Form.Group>
                <div className="d-flex">
                  <Button
                    variant="info"
                    size="lg"
                    type="submit"
                    className="mx-auto"
                    onClick={handleReset}
                  >
                    <h4 className="m-0">SUBMIT TRANSACTION</h4>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AddTransaction;
