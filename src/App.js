import React from "react";
import { Container } from "react-bootstrap";

import BudgetDetail from "./components/BudgetDetail/BudgetDetail";
import BudgetActions from "./components/BudgetActions/BudgetActions";
import styles from "./App.module.css";

function App() {
  return (
    <Container fluid className={styles.app_container}>
      <BudgetDetail title="Income" />
      <BudgetActions title="Budget_Tracker" />
      <BudgetDetail title="Expense" />
    </Container>
  );
}

export default App;
