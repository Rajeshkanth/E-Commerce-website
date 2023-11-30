import React, { memo, useContext, useEffect } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import { ListContext } from "../App";
import { PiShoppingCartLight } from "react-icons/pi";

function Cart() {
  const {
    list,
    setList,
    setTotal,
    total,
    RemoveList,
    closeAll,
    buy,
    closeCart,
  } = useContext(ListContext);

  useEffect(() => {}, [list, total]);

  return (
    <>
      <div id="course">
        <div id="course-container">
          <div id="c-head">
            <h1 id="course-list">
              <PiShoppingCartLight className="cart-icon" />
            </h1>
          </div>
          <div id="c-close">
            <Tooltip title="Close">
              <h1 onClick={closeCart}>X</h1>
            </Tooltip>
          </div>
        </div>
        <div className="list">
          <div> Name</div>
          <div>Price</div>
        </div>
        {list && (
          <div id="crs-list">
            <ul id="ul">
              {list.map((a, index) => (
                <li className="li" key={index}>
                  <h3>{a.Name}</h3>
                  <div className="cost">
                    <h3>{a.Price}</h3>

                    <Tooltip title="Remove">
                      <span
                        id="removeOne"
                        onClick={() => RemoveList(a.Name, a.Price)}
                      >
                        x
                      </span>
                    </Tooltip>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div id="total">
          <div className="totalValue">
            <h3 className="totalName">Total</h3>
            <p className="evals">{total}</p>
          </div>

          <button className="btn" onClick={buy}>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
}

export default memo(Cart);
