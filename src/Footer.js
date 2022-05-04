import React from 'react'
import "./App.css";
import "./Home.css";


const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <>
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
}

export default Footer