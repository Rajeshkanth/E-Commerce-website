import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Container from "./Components/Container";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PaymentForm from "./Components/PaymentForm";
import Body from "./Body";
import { ListContext } from "./Components/Container";

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const [isBuy, setIsBuy] = useState(true);

  const buy = () => {
    setIsBuy(false);
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
