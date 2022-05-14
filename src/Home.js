import React from "react";
import App from "./App";
import "./App.css";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="book">
          <div className="book-left">
            <h1 className="left-title">RSG-SATCOM</h1>

            <div className="left-underline">&nbsp;</div>
            <p className="upper-paragraph">(ARCSSTE-E)</p>
            <p className="lower-paragraph">
              The African Regional Centre for Space Science and Technology
              Education in English (ARCSSTE-E) was inaugurated in Nigeria on
              24th November, 1998 and affiliated to the UN Office for Outer
              Space Affairs (OOSA).
            </p>
          </div>
          <div className="book-right">
            <div className="right-underline">&nbsp;</div>
            <h1 className="title">ARCSTEE Yearbook 2022</h1>
            <h2 className="sub-title">Renaissance class</h2>
            <span className="extra">to the moon!!!</span>
            <p className="bottom-paragraph">
              <small>I would like to die on Mars. Just not on impact</small> -
              Elon Musk.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
