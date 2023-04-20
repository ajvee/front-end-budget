import React from "react";

function TotalAmount({ transactions }) {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalAmount = totalIncome - totalExpense;

  return (
    <div>
      <h3 style={{color: totalAmount >= 100 ? 'green' : 'red'}}>
        Total Amount: $
        {typeof totalAmount === "number"
          ? totalAmount.toFixed(2)
          : totalAmount}
      </h3>
    </div>
  );
}

export default TotalAmount;




