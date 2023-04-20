import React from "react";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";

function App() {
  return (
    <>
      <h1>My Transactions</h1>
      <TransactionList />
      <TransactionForm />
    </>
  );
}

export default App;
