import "./Table.css"
import React from "react";

function TransactionTable({ transactions, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Description</th>
          <th>Date</th>
          <th>From</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.type === "income" ? "Income" : "Expense"}</td>
            <td className={transaction.type === "income" ? "income" : "expense"}>
              {transaction.type === "income" ? "+" : "-"}${transaction.amount}
            </td>
            <td>{transaction.description}</td>
            <td>{transaction.date}</td>
            <td>{transaction.from}</td>
            <td>
              <button onClick={() => onDelete(transaction.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
