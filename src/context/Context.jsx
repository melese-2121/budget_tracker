import { createContext, useReducer } from "react";
import ReducerFunc from "./ReducerFunc";
import { v4 as uuidv4 } from "uuid";
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
    id: 64,
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

export const appContext = createContext(transactions);
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(ReducerFunc, transactions);

  // Delete Tranaction
  const deleteTransaction = (id) => {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  };

  // Add Transaction
  const addTransaction = (transaction) => {
    let edittedTransaction = { ...transaction, id: uuidv4() };
    dispatch({ type: "ADD_TRANSACTION", payload: edittedTransaction });
  };
  return (
    <appContext.Provider
      value={{ deleteTransaction, addTransaction, transactions: state }}
    >
      {children}
    </appContext.Provider>
  );
};
