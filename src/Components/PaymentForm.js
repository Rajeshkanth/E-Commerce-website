import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../App";

function PaymentForm() {
  const { total } = useContext(ListContext);
  console.log(total);
  return (
    <>
      <div>
        <h1>Amount to Pay : {total}</h1>
      </div>
    </>
  );
}
export default PaymentForm;
