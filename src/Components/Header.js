import React, { memo, useState } from "react";
import { FaCaretDown } from "react-icons/fa";

function Header() {
  const [isMenu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!isMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="header-left">
          <div className="image"></div>
          <button className="menu top-left" onClick={handleMenu}>
            Menu <FaCaretDown />
          </button>
          {isMenu ? (
            <div className="top-left2">
              <button className="top-left3">Tutorials</button>
              <button className="top-left3">Exercises</button>
              <button className="top-left3">Certifications</button>
              <button className="top-left3">Services</button>
            </div>
          ) : (
            <>
              <button className="top-left active1">Tutorials</button>
              <button className="top-left active2">Exercises</button>
              <button className="top-left active3">Certifications</button>
              <button className="top-left active4">Services</button>
            </>
          )}
        </div>
        <div className="header-right">
          <button className="top-right sp">{"</>"}Spaces</button>
          <button className="top-right sp">Certificates</button>
          <button className="top-right sp sp2 sign">Sign Up</button>
          <button className="top-right log">Log in</button>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
