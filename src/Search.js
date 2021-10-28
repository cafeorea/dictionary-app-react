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
    <div className="Search">
      <form onSubmit={dictionarySearch}>
        <input type="search" onChange={handleSearchTerm} />
      </form>
    </div>
  );
}
