import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../App";

function PaymentForm() {
  const { total } = useContext(ListContext);
  const totalValue = total;
  console.log(total);
  return (
    <>
      <div>
        <h1>Amount to Pay : {totalValue}</h1>
      </div>
    </>
  );
}
export default PaymentForm;
