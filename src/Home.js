import React from "react";
import App from "./App";
import "./App.css";
import "./Home.css";

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="container">
        <div className="book">
          <div className="book-left">
            <h1 className="left-title">RSG-SATCOM SET</h1>

            <div className="left-underline">&nbsp;</div>
            <p className="upper-paragraph">
              The best Lorem Ipsum Generator in all the sea! Heave this scurvy
              copy.
            </p>
            <p className="lower-paragraph">
              The best Lorem Ipsum Generator in all the sea! Heave this scurvy
              copyfiller fer yar next adventure and cajol yar clients into
              walking the plank with ev'ry layout! Configure above, then get yer
              pirate ipsum...own the high seas, arg!
            </p>
          </div>
          <div className="book-right">
            <div className="right-underline">&nbsp;</div>
            <h1 className="title">ARCSTEE Yearbook 2022</h1>
            <h2 className="sub-title">Renaissance class</h2>
            <span className="extra">to the moon!!!</span>
            <p className="bottom-paragraph">
              {" "}
              <small>
                The best Lorem Ipsum Generator in all the sea! Heave this scurvy
                copyfiller fer yarure and cajol yar clients into walking the
                plank with ev'ry layout! Configure above, then get yer pirate
                ipsum...
              </small>
            </p>
          </div>
        </div>
      </div>
      <footer className="footer">
        copyright &copy;<span>{year}</span>. developed by{" "}
        <a
          href="https://harunanuhu-portfolio.netlify.app/"
          target="_blank"
          className="portfolio-link"
        >
          haruna nuhu
        </a>
      </footer>
    </>
  );
};

export default Home;
