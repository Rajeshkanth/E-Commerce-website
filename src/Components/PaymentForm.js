import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ListContext } from "../App";
import SignIn from "../SignIn";

function PaymentForm() {
  const { setIsBuy } = useContext(ListContext);
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [userInput, setUserInput] = useState("");

  const cancel = () => {
    setIsBuy(true);
    navigate("/");
  };
  const pay = () => {
    setAlert(true);
    navigate("/signin");
  };

  const userInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const totalValue = searchParams.get("total");
  console.log(totalValue);

  return (
    <>
      <div className="paymentContainer">
        <h1>Total Amount : {totalValue}</h1>
        <h2>Confirm Order ?</h2>
        <button className="btn" onClick={pay}>
          Order
        </button>
        <button className="btn" onClick={cancel}>
          {" "}
          Cancel
        </button>
      </div>
      {/* <div className="pymntAlert">
       
        <SignIn />
       
      </div> */}
    </>
  );
}

export default PaymentForm;
