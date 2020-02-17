import React, { useEffect } from "react";

import { Expo, gsap } from "gsap";

import "./App.scss";

import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import Button from "./components/button/Button";
import bg from "./asserts/bg.png";
function App() {
  useEffect(() => {
    const tl = gsap;
    tl.from(".App .background img", 1.6, {
      scaleY: 1.2,
      scaleX: 1.2,
      ease: gsap.registerEase("Custom", "0.6, 0.02, 0.05, 0.9"),
      delay: 0.2
    });

    tl.from(".Banner .line ", 4, {
      width: 0,
      stagger: 0.45,
      ease: "Custom"
    });

    tl.from(".Header", 1, {
      y: -40,
      opacity: 0,
      ease: "Custom",
      stagger: 0.15,
      delay: 0.6
    });

    tl.from(".find-out-button span", 0.8, {
      bottom: -20,
      autoAlpha: 0,
      ease: "Custom",
      stagger: 0.8,
      delay: 1
    });
    tl.from(".find-out-button .line", 0.4, {
      width: 0,
      opacity: 0,
      ease: "Custom",
      delay: 1.2
    });

    tl.from(".description", 1, {
      y: 50,
      opacity: 0,
      ease: "Custom",
      stagger: 0.15,
      delay: 1.2
    });
  }, []);

  return (
    <div className="App">
      <div className="background">
        <img src={bg} alt="" />
      </div>
      <div className="main">
        <Header />
        <Banner />
        <Button className="find-out-button">Find out more</Button>
        <div className="description">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem.
        </div>
      </div>
    </div>
  );
}

export default App;
