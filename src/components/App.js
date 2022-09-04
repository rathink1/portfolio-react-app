import "../styles/App.scss";
import React, { useEffect } from "react";
import Header from "./Header.js";
import { Fragment } from "react";
import Banner from "./Banner.js";

function App() {
  useEffect: () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}`);
  },
    [];

  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
