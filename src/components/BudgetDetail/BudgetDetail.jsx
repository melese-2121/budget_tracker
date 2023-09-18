import { Card } from "react-bootstrap";

import styles from "./BudgetDetail.module.css";

function BudgetDetail({ title }) {
  return (
    <Card className={`${styles.card}`}>
      <Card.Body>
        <Card.Title className={`${styles.title}`}>{title}</Card.Title>

        <Card.Text></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BudgetDetail;
