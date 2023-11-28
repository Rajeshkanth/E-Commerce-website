import React, { memo, useContext } from "react";
import { ListContext } from "../App";

function Python() {
  const { AddList, RemoveList } = useContext(ListContext);
  return (
    <>
      <section className="python">
        <div className="python-container">
          <h1>Python</h1>
          <p>A Popular Programming Language</p>
          <button
            className="btn add-btn"
            onClick={() => AddList("PYTHON", 200)}
          >
            Add python
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("PYTHON", 200)}
          >
            Remove python
          </button>
        </div>
        <div className="ex-box-container-py">
          <div className="example-box-py">
            <h3>Python Example</h3>
            <div className="inner-example-box-py"></div>
            <button className="tiy">Try it Yourself</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Python);
