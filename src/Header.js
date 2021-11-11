import React from "react";
import "./Header.css";

export default function Header() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <nav className="navbar  navbar-light navigation">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 navtext" onClick={refreshPage}>
          📖
        </span>
      </div>
    </nav>
  );
}
