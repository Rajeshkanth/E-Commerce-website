import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PaymentForm from "./Components/PaymentForm";
import Body from "./Body";
// import { ListContext } from "./Components/Container";

export const ListContext = createContext();

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [newTotal, setNewTotal] = useState(0);

  const buy = () => {
    setIsBuy(false);
    setNewTotal(total);
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
      setTotal((prevTotal) => prevTotal - itemToRemove.Price);
    }

    if (updatedList.length === 0) {
      closeAll();
    }
  };

  useEffect(() => {
    console.log(total);
    console.log(newTotal);
    setNewTotal(total);
  }, [list, total, newTotal, isClicked]);
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
        isBuy,
        newTotal,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/payment" element={<PaymentForm />} />
        </Routes>
      </Router>
    </ListContext.Provider>
  );
}

export default App;
