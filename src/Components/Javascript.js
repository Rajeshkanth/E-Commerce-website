import { memo, useContext } from "react";
import { ListContext } from "../App";

function Javascript() {
  const { AddList, RemoveList } = useContext(ListContext);
  return (
    <>
      <section className="javascript">
        <div className="javascript-container">
          <h1>JavaScript</h1>
          <p>The Language for Programming web pages</p>
          <button
            className="btn add-btn"
            onClick={() => AddList("JavaScript", 500)}
          >
            Add javascript
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("JavaScript", 500)}
          >
            Remove javascript
          </button>
        </div>
        <div className="ex-box-container">
          <div className="example-box-js">
            <h3>Javascript Example</h3>
            <div className="inner-example-box-js"></div>
            <button className="tiy">Try it Yourself</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Javascript);
