import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "./data";
import "./Each.css";

const EachGraduate = () => {
  const { value } = useParams();
  const { id, name, profession, imageb, department, quote, about, project } = data[value - 1];
  return (
    <div>
      <button className="back-link-btn">
        <Link to="/graduates" className="back-link">
          back to list
        </Link>
      </button>
      <h1 className="title">meet one of our exceptional graduates</h1>
      <div className="main-container">
        <div className="image-container">
          <img className="image" src={data[id - 1].imageb} />
        </div>
        <div className="content-container">
          <h2 className="name">
            name: <span>{data[id - 1].name}</span>
          </h2>
          <h2 className="job"> profession: <span>{data[id - 1].profession}</span></h2>
          <h2 className="course"> course studied: <span>{data[id - 1].department}</span></h2>
          <h2 className="quote"> favourite quote:</h2>
          <q className="quote-content">{data[id - 1].quote}</q>
          <h2 className="about"> about me:</h2>
          <p className="about-content">{data[id - 1].about}</p>
          <h2 className="pdf-link">
            <a href={project} target="_blank">
              view my project
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default EachGraduate;
