import React, { memo } from "react";

function Header() {
  return (
    <>
      <div className="navbar">
        <div className="header-left">
          <button className="top-left">Tutorials</button>
          <button className="top-left">Exercises</button>
          <button className="top-left">Get Certified</button>
          <button className="top-left">Services</button>
        </div>
        <div className="header-right">
          <button className="top-right">{"</>"}Spaces</button>
          <button className="top-right">Certificates</button>
          <button className="top-right sign">Sign Up</button>
          <button className="top-right log">Log in</button>
        </div>
      </div>
    </>
  );
}

export default memo(Header);
