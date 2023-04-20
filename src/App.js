import React from "react";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";

function App() {
  return (
    <>
      <h1>Budget App</h1>
      <TransactionList />
      <TransactionForm />
    </>
  );
}

export default App;
