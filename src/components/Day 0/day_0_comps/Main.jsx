import React from "react";

function Main() {
  return (
    <div class="container text-center text-light justify-content-center">
      <p class="h1 my-5 name">NIKHIL ANAND</p>
      <img class="logo" src="../images/logo.jpg" alt="" />
      <div class="container justify-content-center my-5">
        <div class="bar row mb-5">
          <div class="col-md-2"></div>
          <a class="col-6 col-md-2 btn btn-md aboutme" href="about">
            About Me
          </a>
          <a class="col-6 col-md-2 btn btn-md contact">Contact</a>
          <a class="col-6 col-md-2 btn btn-md education">Education</a>
          <a class="col-6 col-md-2 btn btn-md interests">Interests</a>
          <div class="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
