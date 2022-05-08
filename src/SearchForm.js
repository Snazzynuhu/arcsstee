import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./Search.css";
import { data } from "./data";

const SearchForm = ({ onSearch }) => {
  const { id } = useParams();
  let inputRef = React.useRef();
  const searchPerson = (e) => {
    e.preventDefault();
    const searchTerm = inputRef.current.value;
    console.log(searchTerm.toUpperCase());
    // alert('hey')
    const filteredList = data.filter(({ name }) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // console.log("filteredList", filteredList);
    onSearch(filteredList);
  };
  return (
    <>
      <form className="form" onSubmit={searchPerson}>
        <input
          ref={inputRef}
          type="text"
          name="graduate"
          placeholder="e.g Anitha"
        />
        <button className="submit-btn" type="submit">
          search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
