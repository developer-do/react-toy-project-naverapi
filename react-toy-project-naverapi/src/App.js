import React from "react";
import "./App.css";
import { Nav } from "./components/common";
import { Search } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Nav />
      <Search />
    </div>
  );
}

export default App;
