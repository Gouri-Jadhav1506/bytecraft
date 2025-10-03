import React from "react";
import Header from "./components/Header";
import WalletBalance from "./components/WalletBalance";
import TransactionList from "./components/TransactionList";
import SendBitcoin from "./components/SendBitcoin";
import ReceiveBitcoin from "./components/ReceiveBitcoin";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <WalletBalance />
      <TransactionList />
      <SendBitcoin />
      <ReceiveBitcoin />
      <Footer />
    </div>
  );
}

export default App;