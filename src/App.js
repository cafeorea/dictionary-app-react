import "./App.css";
import Search from "./Search";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Search />
        <p className="Footer">
          Coded by{" "}
          <a
            href="https://github.com/lincodes"
            target="_blank"
            rel="noreferrer"
          >
            Lin
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
