import React, { memo } from "react";

function Header2() {
  return (
    <>
      <nav className="header2">
        <button className="lang HTML">HTML</button>
        <button className="lang CSS">CSS</button>
        <button className="lang JAVASCRIPT">JAVASCRIPT</button>
        <button className="lang SQL">SQL</button>
        <button className="lang PYTHON">PYTHON</button>
        <button className="lang PYTHON JAVA">JAVA</button>
        <button className="lang PYTHON PHP">PHP</button>
        <button className="lang BOOTSTRAP">BOOTSTRAP</button>
        <button className="lang  HOW W3">W3.CSS</button>
        <button className="lang C">C</button>
        <button className="lang C1 C">C++</button>
        <button className="lang C2">C#</button>
        <button className="lang REACT">REACT</button>
        <button className="lang R">R</button>
        {/* <button className="lang ">JQUERRY</button> */}
        {/* <button className="lang ">EXCEL</button>
        <button className="lang ">XML</button>
        <button className="lang ">DJANGO</button> */}
      </nav>
    </>
  );
}

export default memo(Header2);
