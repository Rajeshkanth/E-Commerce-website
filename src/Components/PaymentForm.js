import React from "react";
import { useLocation } from "react-router-dom";

function PaymentForm() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalValue = searchParams.get("total");
  console.log(totalValue);

  return (
    <>
      <div className="paymentContainer">
        <h1>Amount to Pay : {totalValue}</h1>
        <button className="btn">Pay</button>
      </div>
    </>
  );
}

export default PaymentForm;
