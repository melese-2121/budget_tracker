import { Container } from "react-bootstrap";
import { RiDeleteBinLine } from "react-icons/ri";
import { useContext } from "react";
import { appContext } from "../../../../context/Context";
import styles from "./LIst.module.css";
function List() {
  const contextData = useContext(appContext);

  return (
    <Container fluid>
      <div className={styles.scrollableTag}>
        {contextData.transactions.length == 0 ? (
          <p style={{ fontSize: "20px", color: "red", textAlign: "center" }}>
            Empty Transaction
          </p>
        ) : (
          contextData.transactions.map((t) => {
            return (
              <div
                className={styles.cont}
                style={{
                  borderLeft:
                    t.type == "Income"
                      ? "3px rgb(03, 98, 0) solid"
                      : "3px rgb(161, 10, 10) solid",
                }}
              >
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
                  onClick={() => {
                    contextData.deleteTransaction(t.id);
                  }}
                />
              </div>
            );
          })
        )}
      </div>
    </Container>
  );
}

export default List;
