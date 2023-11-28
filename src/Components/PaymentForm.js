import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ListContext } from "../App";

function PaymentForm({ total }) {
  //   const location = useLocation();
  //   const path = location.pathname;
  //   console.log(path);
  //   const { total } = useContext(ListContext);
  const totalValue = total;
  console.log(total);
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
