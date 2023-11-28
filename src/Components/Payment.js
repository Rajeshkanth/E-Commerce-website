import React, { useContext } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../App";

function Payment({ total }) {
  const navigate = useNavigate();
  //   const { total } = useContext(ListContext);
  const totalValue = total;
  const handlePaymentClick = () => {
    navigate("/payment");
  };

  const paymentURL = `https://rajeshkanth.github.io/E-Commerce-website#/payment`;

  console.log(paymentURL);
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
