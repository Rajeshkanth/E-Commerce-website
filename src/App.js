import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import PaymentForm from "./Components/PaymentForm";
import Body from "./Body";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Order from "./Components/Order";
// import { ListContext } from "./Components/Container";

export const ListContext = createContext();

function App() {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [isClicked, setIsClicked] = useState(true);
  const [isBuy, setIsBuy] = useState(true);
  const [newTotal, setNewTotal] = useState(0);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [createPswd, setCreatePswd] = useState("");
  const [confirmPswd, setConfirmPswd] = useState("");
  const [user, setUser] = useState([]);
  // const navigate = useNavigate();

  const buy = () => {
    setIsBuy(false);
    setNewTotal(total);
  };

  const closeAll = () => {
    setIsClicked(true);
  };
  const closeCart = () => {
    setList([]);
    setTotal(0);
    closeAll();
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
  }, [list, total, newTotal, isBuy, isClicked]);
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
        setIsBuy,
        newTotal,
        name,
        setName,
        setPassword,
        password,
        mail,
        setMail,
        createPswd,
        setCreatePswd,
        confirmPswd,
        setConfirmPswd,
        user,
        setUser,
        closeCart,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/payment" element={<PaymentForm />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp totalValue={total} />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </ListContext.Provider>
  );
}

export default App;
