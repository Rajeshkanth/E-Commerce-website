import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "./App";

function SignIn() {
  const navigate = useNavigate();

  const { name, setName, password, setPassword, user } =
    useContext(ListContext);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const signUp = () => {
    navigate("/signup");
  };
  const login = () => {
    for (let i = 0; i < user.length; i++) {
      if (
        user[i].Mail == name &&
        parseInt(user[i].ConfirmPswd) == parseInt(password)
      ) {
        console.log("hello");
        navigate("/order");
      } else {
        console.log("not");
      }
    }
  };
  return (
    <>
      <div>
        <div className="signInCont">
          <h3>
            <span>Sign in</span> to order...{" "}
          </h3>
          <label htmlFor="user">Enter Your Mail </label>
          <input type="mail" name="user" value={name} onChange={handleName} />
          <label htmlFor="pswd">Enter Your Password</label>
          <input
            type="password"
            name="pswd"
            value={password}
            onChange={handlePassword}
          />
          <button className="btn" onClick={login}>
            Log in
          </button>
          <span className="fp">forgot password ?</span>
          <h3>
            don't have an account... <span onClick={signUp}> Sign Up</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default SignIn;
