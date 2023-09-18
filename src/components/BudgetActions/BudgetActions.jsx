import { Card } from "react-bootstrap";

import FormContainer from "./Form/Form";
import styles from "./BudgetActions.module.css";

function BudgetActions({ title }) {
  return (
    <Card className={`${styles.card}`}>
      <Card.Body>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text>
          <FormContainer />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BudgetActions;
