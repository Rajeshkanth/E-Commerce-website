import React from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

function Payment({ totalValue }) {
  const navigate = useNavigate();

  const handlePaymentClick = () => {
    navigate(`/payment?total=${totalValue}`);
  };

  const paymentURL = `https://rajeshkanth.github.io/E-Commerce-website/#/payment?total=${totalValue}`;

  return (
    <>
      <div className="pymntContainer">
        <div className="pymntClose">
          <h1>Scan here to Pay</h1>
          <h1>x</h1>
        </div>

        <QRCode value={paymentURL} />
        <button onClick={handlePaymentClick}>Go to Payment</button>
      </div>
    </>
  );
}

export default Payment;
