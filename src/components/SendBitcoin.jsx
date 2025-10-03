import React, { useState } from "react";

function SendBitcoin() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleSend = () => {
    alert(`Simulated sending ${amount} BTC to ${address}`);
  };

  return (
    <div className="p-4">
      <h3 className="font-semibold">Send Bitcoin</h3>
      <input
        type="text"
        placeholder="Recipient Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="block my-2 p-2 border w-full"
      />
      <input
        type="number"
        placeholder="Amount (BTC)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block my-2 p-2 border w-full"
      />
      <button onClick={handleSend} className="bg-yellow-400 px-4 py-2 rounded">
        Send
      </button>
    </div>
  );
}

export default SendBitcoin;