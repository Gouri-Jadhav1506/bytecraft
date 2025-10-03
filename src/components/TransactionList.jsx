import React from "react";
import transactions from "../data/transactions.json";

function TransactionList() {
  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold">Transaction History</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index} className="border-b py-2">
            <span>{tx.date}</span> - <span>{tx.type}</span> - <span>{tx.amount} BTC</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;