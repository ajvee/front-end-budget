import React, { useState, useEffect } from "react";
import axios from "axios";
import TotalAmount from "./TotalAmount";
import TransactionTable from "./TransactionTable";
import "./TransactionList.css"

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    getTransactions();
  }, []);

  const getTransactions = async () => {
    try {
      const response = await axios.get("http://localhost:3333/transactions");
      setTransactions(response.data);
      setTotalAmount(
        response.data.reduce((acc, curr) => acc + Number(curr.amount), 0)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await axios.delete(`http://localhost:3333/transactions/${id}`);
      getTransactions();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="transaction-list">
      <h2>Transaction List</h2>
      <TotalAmount transactions={transactions} />
      <TransactionTable
        transactions={transactions}
        onDelete={handleDeleteTransaction}
      />
    </div>
  );
}

export default TransactionList;

