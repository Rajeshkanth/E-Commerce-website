import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ListContext } from "../App";

function PaymentForm() {
  const { setIsBuy } = useContext(ListContext);
  const navigate = useNavigate();

  const cancel = () => {
    setIsBuy(true);
    navigate("/");
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalValue = searchParams.get("total");
  console.log(totalValue);

  return (
    <>
      <div className="paymentContainer">
        <h1>Amount to Pay : {totalValue}</h1>
        <button className="btn">Pay</button>
        <button className="btn" onClick={cancel}>
          {" "}
          Cancel
        </button>
      </div>
    </>
  );
}

export default PaymentForm;
