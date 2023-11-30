import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ListContext } from "./App";

function SignUp() {
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
  const createAcnt = () => {
    if (mail && createPswd && confirmPswd) {
      let newUser = {
        Mail: mail,
        CreatePswd: createPswd,
        ConfirmPswd: confirmPswd,
      };
      setUser([...user, newUser]);
    }
    setCreatePswd("");
    setConfirmPswd("");
    setMail("");
    alert("New User Registered");
    setTimeout(() => {
      navigate("/payment");
    }, 2000);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      <div>
        <div className="signupCont">
          <label htmlFor="mail">Enter Mail id</label>
          <input type="mail" name="mail" value={mail} onChange={handleMail} />
          <label htmlFor="createPswd">Enter Password</label>
          <input
            type="password"
            value={createPswd}
            onChange={handleCreatePswd}
          />
          <label htmlFor="confirmPswd">Confirm Password</label>
          <input
            type="password"
            value={confirmPswd}
            onChange={handleConfirmPswd}
          />
          <button className="btn" onClick={createAcnt}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default SignUp;
