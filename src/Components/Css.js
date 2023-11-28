import React, { memo, useContext } from "react";
import { ListContext } from "../App";

function Css() {
  const { AddList, RemoveList } = useContext(ListContext);
  return (
    <>
      <section className="css">
        <div className="css-container">
          <h1>CSS</h1>
          <p>The Language for styling web pages</p>
          <button className="btn add-btn" onClick={() => AddList("CSS", 50)}>
            Add CSS
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("CSS", 50)}
          >
            Remove CSS
          </button>
        </div>
        <div className="ex-box-container">
          <div className="example-box">
            <h3>CSS Example</h3>
            <div className="inner-example-box"></div>
            <button className="tiy">Try it Yourself</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Css);
