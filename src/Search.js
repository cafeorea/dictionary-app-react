import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");

  function dictionarySearch(event) {
    event.preventDefault();
    alert(`Searching for ${searchTerm} definition`);
  }

  function handleSearchTerm(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <h1>Enter a word...</h1>
      <form onSubmit={dictionarySearch}>
        <input
          type="search"
          className="form-control form-control-lg"
          onChange={handleSearchTerm}
        />
      </form>
    </div>
  );
}
