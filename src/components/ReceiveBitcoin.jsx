import React from "react";
import QRCode from "qrcode.react";

function ReceiveBitcoin() {
  const address = "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa"; // sample

  return (
    <div className="p-4 text-center">
      <h3 className="font-semibold mb-2">Receive Bitcoin</h3>
      <QRCode value={address} size={128} />
      <p className="mt-2 text-sm">Your BTC Address:</p>
      <p className="text-xs break-all">{address}</p>
    </div>
  );
}

export default ReceiveBitcoin;