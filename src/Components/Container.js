import React, {
  createContext,
  memo,
  useContext,
  useEffect,
  useState,
} from "react";
import Header2 from "./Header2";
import Home from "./Home";
import HTML from "./HTML";
import Css from "./Css";
import Javascript from "./Javascript";
import Python from "./Python";
import Sql from "./Sql";
import Php from "./Php";
import Cart from "./Cart";
import Payment from "./Payment";
import { ListContext } from "../App";

function Container() {
  const { isClicked, isBuy, total } = useContext(ListContext);
  const Container = {
    block: {
      display: "block",
    },
    flex: {
      display: "flex",
    },
    leftWidth1: {
      width: "100%",
    },
    leftWidth2: {
      width: "75%",
    },
    rightWidth1: {
      width: "0%",
      display: "none",
    },
    rightWidth2: {
      width: "25%",
    },
  };

  // console.log(list);
  return (
    <>
      <div
        className={isClicked === true ? "container" : "flex"}
        // style={isClicked === true ? Container.block : Container.flex}
      >
        <div className={isClicked === true ? "left-width1" : "left-width2"}>
          <Header2 />
          <Home />
          <HTML />
          <Css />
          <Javascript />
          <Python />
          <Sql />
          <Php />
        </div>
        {
          <div className={isClicked === true ? "right-width1" : "right-width2"}>
            <Cart />
          </div>
        }
      </div>
      {isBuy ? null : <Payment totalValue={total} />}
    </>
  );
}

export default memo(Container);
