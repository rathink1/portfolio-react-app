import React from "react";
import { ReactComponent as ArrowRight } from "../assets/arrow-right.svg";

const Banner = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>Anne-Karin Cooke</span>
            </div>
            <div className="line">
              <span>Artist</span>
            </div>
          </h2>
          <div className="btn-row">
            <a href="/">
              More about me
              <ArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
