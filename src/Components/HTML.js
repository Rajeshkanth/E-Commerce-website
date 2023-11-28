import React, { memo, useContext } from "react";
import { ListContext } from "../App";

function HTML() {
  const { AddList, RemoveList } = useContext(ListContext);
  return (
    <>
      <section className="html">
        <div className="html-container">
          <h1>HTML</h1>
          <p>The Language for building web pages</p>
          <button className="btn add-btn" onClick={() => AddList("HTML", 100)}>
            Add HTML
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("HTML", 100)}
          >
            Remove HTML
          </button>
        </div>
        <div className="ex-box-container">
          <div className="example-box">
            <h3>HTML Example</h3>
            <div className="inner-example-box"></div>
            <button className="tiy">Try it Yourself</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(HTML);
