import React from "react";
import About from "./day_0_comps/About";
import Footer from "./day_0_comps/Footer";
import Main from "./day_0_comps/Main";
// import "./day00.css";
function Day00() {
  return (
    <div
      style={{
        backgroundClolor: "black",
        margin: "0 7em",
      }}
    >
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default Day00;
