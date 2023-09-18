import { Form, Container } from "react-bootstrap";
import List from "./TransactionsList/List";
import { useState } from "react";
import styles from "./Form.module.css";

function FormContainer() {
  const [showT, setShowT] = useState(false);

  return (
    <Container fluid>
      <Form>
        <div class={styles.cont}>
          <Form.Group
            className={`mb-3 d-flex justify-content-around ${styles.selectContainer}`}
            controlId="type"
          >
            <Form.Select
              aria-label="Default select example"
              className={styles.select}
            >
              <option value="" disabled selected>
                Type
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select
              aria-label="Default select example"
              className={styles.select}
              placeholder="Category"
            >
              <option value="" disabled selected>
                Category
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
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
            />
            <Form.Control
              className={styles.select}
              type="date"
              placeholder="Date"
            />
          </Form.Group>
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-outline-secondary" type="button">
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
        <p style={{ textAlign: "center", color: "red", height: "85px" }}>
          {" "}
          Transactions are hidden.{" "}
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
