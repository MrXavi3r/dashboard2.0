import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Col, Card, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { categories } from "../data";
import { Formik } from "formik";
import * as yup from "yup";

const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [formData] = useState({
    data: {
      text: "",
      amount: 0,
      date: "",
      category: "",
    },
  });

  const schema = yup.object().shape({
    text: yup.string().min(4, "must be at least 4 characters").required(),
    amount: yup.number().required().min(1),
    date: yup.date().required(),
    category: yup.string().required(),
  });

  return (
    <Col className="mx-auto d-flex border p-3 rounded" md={12} xl={8}>
      <Card className="bg-info w-100 add-trans-info">
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-plus-box text-primary m-1"></i>
          </span>
          <h5 className="text-light mt-1">Add A Transaction</h5>
          <p className="text-light">
            A complete history of all transactions may be viewed in the
            Transaction List under the Transactions tab in the menu
          </p>
        </div>
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-check-bold text-success m-1"></i>
          </span>
          <h5 className="text-light mt-1">Validation</h5>
          <p className="text-light">
            Complete all fields to add a new entry. Positive numbers for income.
            Negative numbers for expenses. Select appropriate category.
          </p>
        </div>
        <div className="px-4 my-3">
          <span className="bg-light rounded-circle">
            <i className="mdi mdi-eye text-danger m-1"></i>
          </span>
          <h5 className="text-light mt-1">Quick View</h5>
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
            onSubmit={(values) => {
              console.log(values);
              addTransaction(values)
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              handleBlur,
              touched,
              handleReset,
              isValid,
              errors,
            }) => (
              <Form
                noValidate
                onSubmit={handleSubmit}
                className=""
              >
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
                    className="bg-light text-dark"
                    isValid={touched.amount && !errors.amount}
                    isInvalid={0}
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
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value="">select a category</option>
                    <option value={"income"}>Income</option>
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
                    disabled={!isValid}
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
