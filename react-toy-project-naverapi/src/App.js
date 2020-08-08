import React from "react";
import "./App.css";
import { ListItem } from "./components/pages";
import { Nav } from "./components/common";

function App() {
  return (
    <div className="App">
      <Nav />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </div>
  );
}

export default App;
