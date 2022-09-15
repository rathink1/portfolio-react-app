import React, { Component } from "react";
import Sketch from "react-p5";

const x = 0;
const y = 0;
export default class P5sketch extends Component {
  setupPosition = (p5) => {
    x = p5.windowWidth / 2;
    y = p5.windowHeight / 2;
  };

  drawBackground = (p5) => {
    p5.background(0);
  };

  windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    p5.drawBackground();
    p5.setupPosition();
  };

  setup = (p5, canvasParentRef) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef
    );
    // p5.frameRate(this.fr);
    // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
    p5.drawBackground();
    p5.setupPosition();
    p5.stroke();
  };

  draw = (p5) => {
    p5.fill(255, 255, 255, 25);
    p5.noStroke();
    p5.ellipse(x, y, 48, 48);

    x = x + p5.random(-10, 10);
    y = y + p5.random(-10, 10);
  };

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />;
  }
}
