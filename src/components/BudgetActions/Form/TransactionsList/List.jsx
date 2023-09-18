import { Container } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import styles from "./LIst.module.css";
function List() {
  const currentDate = new Date();
  const formattedDate = currentDate.toDateString();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 3,
      date: formattedDate,
    },
    {
      id: 34,
      type: "Expense",
      category: "Food",
      amount: 6,
      date: formattedDate,
    },
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 3,
      date: formattedDate,
    },
    {
      id: 34,
      type: "Expense",
      category: "Food",
      amount: 6,
      date: formattedDate,
    },
    {
      id: 54,
      type: "Income",
      category: "Salary",
      amount: 454,
      date: formattedDate,
    },
  ];

  return (
    <Container fluid>
      <div className={styles.scrollableTag}>
        {transactions.map((t) => {
          return (
            <div className={styles.cont}>
              <div>
                <p
                  style={{
                    fontSize: "22px",
                    marginLeft: "5px",
                    color:
                      t.type == "Income"
                        ? "rgb(03, 98, 0) "
                        : "rgb(161, 10, 10)",
                  }}
                >
                  {t.category}
                </p>
                <p style={{ marginLeft: "10px", fontStyle: "italic" }}>
                  {t.date}
                </p>
              </div>
              <RiDeleteBinLine
                style={{
                  color: "rgb(161, 10, 10)",
                  fontSize: "24px",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: "50px",
                  marginRight: "3px",
                }}
              />
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default List;
