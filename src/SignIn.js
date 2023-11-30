import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "./App";

function SignIn() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState(false);
  const [msg2, setMsg2] = useState(false);

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
    if (name && password) {
      setMsg2(false);
      let userFound = false;
      for (let i = 0; i < user.length; i++) {
        if (user[i].Mail === name && user[i].ConfirmPswd === password) {
          userFound = true;
          break;
        }
      }
      if (userFound) {
        navigate("/order");
      } else {
        setMsg(true);
      }
    } else {
      setMsg2(true);
    }
  };
  return (
    <>
      <div>
        <div className="signInCont">
          <h3>
            <span>Sign in to order...</span>
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
          {msg ? (
            <div className="fp">
              <h6>Mail/Password do not matched</h6>{" "}
              <span>forgot password ?</span>
              <h6>
                don't have an account... <span onClick={signUp}> Sign Up</span>
              </h6>
            </div>
          ) : null}
          {msg2 ? (
            <div className="fp ">
              <h6>Enter Valid Mail/Password!</h6>
            </div>
          ) : null}
          <button className="btn" onClick={login}>
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default SignIn;
