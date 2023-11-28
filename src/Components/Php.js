import React, { memo, useContext } from "react";
import { ListContext } from "../App";

function Php() {
  const { AddList, RemoveList, isClicked } = useContext(ListContext);
  return (
    <>
      <section className="php">
        <div
          className=" crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>PHP</h1>
          <button className=" btn add-btn" onClick={() => AddList("PHP", 150)}>
            Add php
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("PHP", 150)}
          >
            Remove php
          </button>
        </div>
        <div
          className="jquerry crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>jquerry</h1>
          <button
            className="btn add-btn"
            onClick={() => AddList("JQUERRY", 50)}
          >
            Add jquerry
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("JQUERRY", 50)}
          >
            Remove jquerry
          </button>
        </div>
        <div
          className="java crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>java</h1>
          <button className="btn add-btn" onClick={() => AddList("JAVA", 250)}>
            Add java
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("JAVA", 250)}
          >
            Remove java
          </button>
        </div>
        <div
          className="c++ crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>C++</h1>
          <button className="btn add-btn" onClick={() => AddList("C++", 150)}>
            Add C++
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("C++", 150)}
          >
            Remove C++
          </button>
        </div>
        <div
          className="w3 crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>w3.css</h1>
          <button className="btn add-btn" onClick={() => AddList("W3.CSS", 50)}>
            Add w3.css
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("W3.CSS", 50)}
          >
            Remove w3.css
          </button>
        </div>
        <div
          className="bootstrap crs-container"
          style={isClicked === true ? { width: "90%" } : { width: "90%" }}
        >
          <h1>Bootstrap</h1>
          <button
            className="btn add-btn"
            onClick={() => AddList("BOOTSTRAP", 150)}
          >
            Add bootstrap
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("BOOTSTRAP", 150)}
          >
            Remove bootstrap
          </button>
        </div>
      </section>
    </>
  );
}

export default memo(Php);
