import "../styles/App.scss";
import React, { useEffect } from "react";
import Header from "./Header.js";
import { Fragment } from "react";
import Banner from "./Banner.js";
import Cases from "./Cases.js";
// import Background from "./Background.js";
// import P5comp from "./P5comp.js";

function App() {
  // const [state, setState] = useState({
  //   color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
  // });

  useEffect: () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}`);
  },
    [];

  return (
    <div className="App">
      <Header />
      <Banner />
      <Cases />
      {/* <Background /> */}
    </div>
  );
}

export default App;
