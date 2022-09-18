import "../styles/App.scss";
import React, { useEffect } from "react";
import Header from "./Header.js";
import { Fragment } from "react";
import Banner from "./Banner.js";
import Cases from "./Cases.js";
import Sketch from "react-p5";
// import Background from "./Background.js";
// import P5comp from "./P5comp.js";
// import P5sketch from "./P5sketch.js";
import IntroOverlay from "./IntroOverlay.js";
import { gsap } from "gsap";

gsap.registerPlugin({
  name: "className",
  init: true,
  register(gsap, Plugin) {
    var CSSPlugin = gsap.plugins.css,
      cssCore =
        CSSPlugin.core || console.warn("Requires GSAP 3.2.1 or later") || {},
      _removeLinkedListItem = gsap.core._removeLinkedListItem,
      _removeProperty = cssCore._removeProperty,
      PropTween = gsap.core.PropTween,
      _getAllStyles = function (target, uncache) {
        var styles = {},
          computed = getComputedStyle(target),
          cache = target._gsap,
          p;
        for (p in computed) {
          if (isNaN(p) && p !== "cssText" && p !== "length") {
            styles[p] = computed[p];
          }
        }
        uncache && cache && (cache.uncache = true);
        gsap.getProperty(target, "x");
        cache = target._gsap;
        for (p in cache) {
          styles[p] = cache[p];
        }
        return styles;
      };
    Plugin.prototype.init = function (target, endValue, tween) {
      let startClassList = target.getAttribute("class"),
        style = target.style,
        cssText = style.cssText,
        cache = target._gsap,
        classPT = cache.classPT,
        inlineToRemoveAtEnd = {},
        end =
          endValue.charAt(1) !== "="
            ? endValue
            : startClassList.replace(
                new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"),
                ""
              ) + (endValue.charAt(0) === "+" ? " " + endValue.substr(2) : ""),
        plugin = this,
        changingVars = {},
        startVars = _getAllStyles(target),
        transformRelated = /(transform|perspective)/i,
        css = new CSSPlugin(),
        _renderClassName = function (ratio) {
          css.render(ratio, css);
          if (!ratio || ratio === 1) {
            target.setAttribute("class", ratio ? end : startClassList);
            for (var p in inlineToRemoveAtEnd) {
              _removeProperty(target, p);
            }
          }
        },
        endVars,
        p;
      if (classPT) {
        classPT.r(1, classPT.d);
        _removeLinkedListItem(classPT.d, classPT, "_pt");
      }
      target.setAttribute("class", end);
      endVars = _getAllStyles(target, true);
      target.setAttribute("class", startClassList);
      for (p in endVars) {
        if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
          changingVars[p] = endVars[p];
          if (!style[p] && style[p] !== "0") {
            inlineToRemoveAtEnd[p] = 1;
          }
        }
      }
      cache.classPT = plugin._pt = new PropTween(
        null,
        target,
        "className",
        0,
        0,
        _renderClassName,
        plugin,
        0,
        -11
      );
      if (style.cssText !== cssText) {
        style.cssText = cssText;
      }
      cache.uncache = true;
      gsap.getProperty(target, "x");
      css.init(target, changingVars, tween);
      plugin._props.push.apply(plugin._props, css._props);
      return 1;
    };
  },
});
// ClassNamePlugin END

function App() {
  // const [state, setState] = useState({
  //   color: [Math.random() * 255, Math.random() * 255, Math.random() * 255],
  // });

  useEffect: () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}`);

    // gsap.to("body", 0, { css: { visibility: "visible" } });
    const timeline = gsap.timeline();
    timeline.from(".line span", 1.8, {
      className: "+=active",
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: { amount: 0.3 },
    });
  },
    [];

  return (
    <div className="App">
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
      {/* <Background /> */}
      {/* <P5sketch />; */}
    </div>
  );
}

export default App;
