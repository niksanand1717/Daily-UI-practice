import React from "react";

function Main() {
  return (
    <div class="container text-center justify-content-center">
      <p class="h1 my-5 name">NIKHIL ANAND</p>
      <img class="logo" src="../images/logo.jpg" alt="" />
      <div class="container justify-content-center my-5">
        <div class="bar row mb-5">
          <div class="col-md-2"></div>
          <h4 class="col-6 col-md-2 btn btn-md aboutme" href="about">
            About Me
          </h4>
          <h4 class="col-6 col-md-2 btn btn-md contact">Contact</h4>
          <h4 class="col-6 col-md-2 btn btn-md education">Education</h4>
          <h4 class="col-6 col-md-2 btn btn-md interests">Interests</h4>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
