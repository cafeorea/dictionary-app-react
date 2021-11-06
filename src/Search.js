import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response);
    setResults(response.data[0]);
  }

  function dictionarySearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);
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
      <Results results={results} />
    </div>
  );
}
