import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "./App";

function SignUp({ totalValue }) {
  const [msg, setMsg] = useState(false);
  const [msg2, setMsg2] = useState(false);
  const navigate = useNavigate();
  const {
    user,
    createPswd,
    setCreatePswd,
    mail,
    setMail,
    confirmPswd,
    setConfirmPswd,

    setUser,
  } = useContext(ListContext);

  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleCreatePswd = (e) => {
    setCreatePswd(e.target.value);
  };
  const handleConfirmPswd = (e) => {
    setConfirmPswd(e.target.value);
  };
  const createAcnt = (e) => {
    e.preventDefault();
    if (mail && createPswd && confirmPswd) {
      if (createPswd !== confirmPswd) {
        setMsg2(true);
        return;
      } else {
        let newUser = {
          Mail: mail,
          CreatePswd: createPswd,
          ConfirmPswd: confirmPswd,
        };
        setUser([...user, newUser]);
        setMsg2(false);
        alert("New User Registered");
        setTimeout(() => {
          navigate(`/signin`);
        }, 1000);
      }
    } else {
      setMsg(true);
    }
    setCreatePswd("");
    setConfirmPswd("");
    setMail("");
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <div>
        <form action="">
          <div className="signupCont">
            <label htmlFor="mail">Enter Mail id</label>
            <input
              type="mail"
              name="mail"
              value={mail}
              onChange={handleMail}
              required
            />
            <label htmlFor="createPswd">Enter Password</label>
            <input
              type="password"
              value={createPswd}
              onChange={handleCreatePswd}
              required
              minLength={6}
              maxLength={10}
            />
            <label htmlFor="confirmPswd">Confirm Password</label>
            <input
              type="password"
              value={confirmPswd}
              onChange={handleConfirmPswd}
              required
              minLength={6}
              maxLength={10}
            />
            {msg2 ? <h6>Password Not Matched</h6> : null}
            {msg ? <h6>Fill all the values</h6> : null}
            <button className="btn" onClick={createAcnt}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
