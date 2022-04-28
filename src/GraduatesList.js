import React,{useState} from "react";
import EachGraduate from "./EachGraduate";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
import "./List.css";
import { Link } from "react-router-dom";
import { AiFillMail } from "react-icons/ai";
import {FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaWhatsappSquare} from "react-icons/fa";

const GraduatesList = ({list}) => {
  const { graduates, loading } = useGlobalContext();
  
  if (loading) {
    return <Loading />;
  }
  // if(graduates.length < 1){
  //     return(
  //         <h2>No graduate in 2022 matched your search criteria</h2>
  //     )
  // }
  return (
    <>
      <h1 className="title">Graduands List</h1>
      <section className="list-section">
        {list.map((item) => {
          const {
            name,
            image,
            id,
            profession,
            department,
            facebook,
            twitter,
            linkedin,
            project
          } = item;
          return (
            <article key={item.id} className="single-person">
              <div className="graduate-photo">
                <img src={image} alt="graduate photo" />
              </div>
              <h2 className="graduate-name">
                name: <span>{name}</span>
              </h2>
              <h3 className="graduate-job">
                profession: <span>{profession}</span>
              </h3>
              <div className="social-icons">
                <a href={facebook} target="_blank">
                  <FaFacebookSquare />
                </a>
                <a href={twitter} target="_blank">
                  <FaTwitterSquare />
                </a>
                <a href={linkedin} target="_blank">
                  <FaLinkedin />
                </a>
                <a href={linkedin} target="_blank">
                  <FaWhatsappSquare />
                </a>
                <a href={linkedin} target="_blank">
                  <AiFillMail />
                </a>
              </div>
              <Link to={`/graduate/${id}`} className="more-details">
                more details
              </Link>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default GraduatesList;
