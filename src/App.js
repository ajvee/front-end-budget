import React from "react";
import TransactionList from "./Components/TransactionList";
import TransactionForm from "./Components/TransactionForm";
import "./App.css"; 

function App() {
  return (
    <>
      <h1>Budget App</h1>
      <div className="container">
        <div className="form-container">
          <TransactionForm />
        </div>
        <div className="list-container">
          <TransactionList />
        </div>
      </div>
    </>
  );
}

export default App;
