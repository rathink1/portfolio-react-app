import React from "react";
// import P5comp from "./P5comp.js";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          <div className="logo">
            <a href="/">AKC.</a>
          </div>
          <div className="nav">
            <span></span>
            <span></span>
          </div>
          {/* <P5comp /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
