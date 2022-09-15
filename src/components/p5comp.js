import React, { Component } from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import sketch from "./sketch";

const P5Comp = () => {
  return (
    // class P5comp extends Component {
    // constructor() {
    //   super();
    //   this.state = {
    //     color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    //   };
    //   this.randomColor = this.randomColor.bind(this);
    // }

    // randomColor() {
    //   this.setState({
    //     color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
    //   });
    // }

    <div>
      <button onClick={this.state.color}>Random Color</button>
      <ReactP5Wrapper sketch={sketch} color={this.state.color}></ReactP5Wrapper>
    </div>
  );
};

export default P5comp;
