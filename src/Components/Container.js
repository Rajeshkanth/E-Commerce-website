import React, { createContext, memo, useEffect, useState } from "react";
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

export const ListContext = createContext();
function Container() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const [isBuy, setIsBuy] = useState(true);

  const buy = () => {
    setIsBuy(false);
  };

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

  const closeAll = () => {
    setIsClicked(true);
  };

  const AddList = (name, price) => {
    // const itemExist = list.some(
    //   (items) => items.Name === name && items.Price === price
    // );

    const index = list.findIndex((a) => a.Name === name);
    const newList = { Name: name, Price: price };
    if (index === -1) {
      setIsClicked(false);
      setList((a) => [...a, newList]);
      setTotal(total + price);
    }
  };

  const RemoveList = (name, price) => {
    const updatedList = list.filter((item) => item.Name !== name);
    const itemToRemove = list.find((item) => item.Name === name);

    if (itemToRemove) {
      setList(updatedList);
      setTotal(total - itemToRemove.Price);
    }

    if (updatedList.length === 0) {
      closeAll();
    }
  };

  useEffect(() => {}, [list, total, isClicked]);

  console.log(list);
  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        total,
        setTotal,
        AddList,
        RemoveList,
        closeAll,
        isClicked,
        buy,
      }}
    >
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
        <div className={isClicked === true ? "right-width1" : "right-width2"}>
          <Cart />
        </div>
      </div>
      {isBuy ? null : <Payment />}
    </ListContext.Provider>
  );
}

export default memo(Container);
