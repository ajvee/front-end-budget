import React, { useState } from "react";
import axios from "axios";
import "./TransactionForm.css"; 

function TransactionForm() {
  const [newTransaction, setNewTransaction] = useState({
    type: "expense",
    amount: "",
    description: "",
    date: "",
    from: ""
  });

  const handleInputChange = (event) => {
    setNewTransaction({
      ...newTransaction,
      [event.target.name]: event.target.value,
    });
  };

  const handleAddTransaction = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3333/transactions", newTransaction);
      setNewTransaction({ type: "expense", amount: "", description: "", date: "", from: "" });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>
      <form onSubmit={handleAddTransaction}>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={newTransaction.type}
          onChange={handleInputChange}
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={newTransaction.amount}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={newTransaction.description}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={newTransaction.date}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          id="from"
          name="from"
          value={newTransaction.from}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type="submit">Add Transaction</button>
      </form>
      <p>Amount: {newTransaction.type === "expense" ? "-" : ""}{Math.abs(newTransaction.amount).toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
    </div>
  );
}

export default TransactionForm;
