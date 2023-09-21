import { Form, Container } from "react-bootstrap";
import List from "./TransactionsList/List";
import { useState, useContext } from "react";
import { appContext } from "../../../context/Context";
import {
  incomeCategories,
  expenseCategories,
} from "../../../constants/Categories";
import styles from "./Form.module.css";
import { eventWrapper } from "@testing-library/user-event/dist/utils";

function FormContainer() {
  const contextData = useContext(appContext);
  const date = new Date();
  const initialValue = {
    type: "Income",
    category: "Bussiness",
    amount: "",
    date: date.toDateString(),
  };
  const [newDate2, setNewDate2] = useState(date.toDateString());
  const [formData, setFormData] = useState(initialValue);
  const [showT, setShowT] = useState(false);
  const [categoriesList, setCategoriesList] = useState(incomeCategories);
  const handleSubmitData = (e) => {
    e.preventDefault();
    contextData.addTransaction(formData);
  };

  return (
    <Container fluid>
      <Form onSubmit={handleSubmitData}>
        <div class={styles.cont}>
          <Form.Group
            className={`mb-3 d-flex justify-content-around ${styles.selectContainer}`}
            controlId="type"
          >
            <Form.Select
              aria-label="Default select example"
              className={styles.select}
              value={formData.type}
              onChange={(event) => {
                setFormData({ ...formData, type: event.target.value });
                console.log(formData.type);
                setCategoriesList(
                  event.target.value === "Income"
                    ? incomeCategories
                    : expenseCategories
                );
              }}
            >
              <option>Income</option>
              <option>Expense</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className={styles.select}
              placeholder="Category"
              value={formData.category}
              onChange={(event) => {
                setFormData({ ...formData, category: event.target.value });
              }}
            >
              {categoriesList.map((category) => {
                return (
                  <option
                    style={{
                      backgroundColor: category.color,
                      color: "white",
                      fontFamily: "cursive",
                    }}
                  >
                    {category.type}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <Form.Group
            className={`mb-3 d-flex justify-content-around ${styles.selectContainer}`}
            controlId="type"
          >
            <Form.Control
              className={styles.select}
              type="number"
              placeholder="Amount"
              value={formData.amount}
              onChange={(event) => {
                setFormData({ ...formData, amount: event.target.value });
              }}
            />
            <Form.Control
              className={styles.select}
              type="date"
              placeholder="Date"
              value={newDate2}
              onChange={(event) => {
                let newDate = new Date(event.target.value);
                setNewDate2(event.target.value);
                setFormData({
                  ...formData,
                  date: newDate.toDateString(),
                });
              }}
            />
          </Form.Group>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary" type="submit">
            Create
          </button>
        </div>

        <hr
          style={{
            color: "red",
            borderTop: "2px red solid",
            marginTop: "20px",
          }}
        />
      </Form>

      {showT ? (
        <List />
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "red",
            height: "85px",
            fontSize: "20px",
          }}
        >
          Transactions are hidden.
        </p>
      )}

      <div className="d-flex justify-content-end">
        <button
          className="btn btn-outline-secondary mt-3"
          type="button"
          onClick={() => {
            setShowT(!showT);
          }}
        >
          {!showT ? "View Transactions" : "Hide Transactions"}
        </button>
      </div>
    </Container>
  );
}

export default FormContainer;
