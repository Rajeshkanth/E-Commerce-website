import React, { memo } from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Home() {
  return (
    <>
      <section className="home">
        <h1>Learn to Code</h1>
        <p>With the world's largest web developer site.</p>
        <div>
          <input type="text" placeholder="search our tutorials, e.g. HTML" />
          <button>
            <HiOutlineSearch className="search-icon" />
          </button>
        </div>

        <a href="">Not Sure Where To Begin?</a>
      </section>
    </>
  );
}

export default memo(Home);
