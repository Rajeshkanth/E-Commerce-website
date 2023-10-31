import React, { memo } from "react";

function Home() {
  return (
    <>
      <section className="home">
        <h1>Learn to Code</h1>
        <p>With the world's largest web developer site.</p>
        <input type="text" placeholder="search our tutorials, e.g. HTML" />
        <button></button>
        <a href="">Not Sure Where To Begin?</a>
      </section>
    </>
  );
}

export default memo(Home);
