import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search() {
  let [searchTerm, setSearchTerm] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function pexelsSearch(response) {
    setPhotos(response.data.photos);
  }

  function dictionarySearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey =
      "563492ad6f917000010000019c3d31bb4fc949b8afd44f5ad2a4c057";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${searchTerm}`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(pexelsSearch);
  }

  function handleSearchTerm(event) {
    event.preventDefault();
    setSearchTerm(event.target.value);
  }

  return (
    <div className="SearchBar">
      <section>
        <h1>English Dictionary</h1>
        <form onSubmit={dictionarySearch}>
          <input
            type="search"
            className="form-control form-control-lg"
            placeholder="Search for a word..."
            onChange={handleSearchTerm}
          />
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
