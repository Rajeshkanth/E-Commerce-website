import React, { memo, useContext } from "react";
import { ListContext } from "./Container";

function Sql() {
  const { AddList, RemoveList } = useContext(ListContext);
  return (
    <>
      <section className="sql">
        <div className="sql-container">
          <h1>SQL</h1>
          <p>A Language for accessing databases</p>
          <button className="btn add-btn" onClick={() => AddList("SQL", 100)}>
            Add sql
          </button>
          <button
            className="btn remove-btn"
            onClick={() => RemoveList("SQL", 100)}
          >
            Remove sql
          </button>
        </div>
        <div className="ex-box-container-sql">
          <div className="example-box-sql">
            <h3>SQL Example</h3>
            <div className="inner-example-box-sql"></div>
            <button className="tiy">Try it Yourself</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Sql);
