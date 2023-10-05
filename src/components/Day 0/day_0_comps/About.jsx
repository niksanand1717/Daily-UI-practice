import React from "react";

function About() {
  return (
    <div class="container text-center text-light justify-content-center">
      <p class="h1 my-5 name">ABOUT NIKHIL</p>
      {/* <!-- <img class="logo" src="../images/logo.jpg" alt=""> --> */}
      <div class="container justify-content-center my-5">
        <div class="row m-3">
          <div class="col-md-2"></div>
          <div class="card col-12 col-md-4 my-4">
            {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
            <div class="card-body">
              <h5 class="card-title text-secondary fw-bold">
                In Web Development
              </h5>
              <p class="card-text text-muted fw-light">
                Completed Udemy Course of Dr. Angela Yu.
                <br />
                Till React Module. Not very interested in BlockChain rightnow.
              </p>
              <a href="" class="btn btn-outline-secondary w-75">
                Know Interests
              </a>
            </div>
          </div>

          <div class="card col-12 col-md-4 my-4">
            {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
            <div class="card-body">
              <h5 class="card-title text-secondary fw-bold">
                Python Programming Language
              </h5>
              <p class="card-text  text-muted fw-light">
                Completed `Python for Everybody` <br /> Specialisation by Dr.
                Chuck <br />
                Proudly Python L**er
              </p>
              <a href="" class="btn btn-outline-secondary w-75">
                Certificates
              </a>
            </div>
          </div>
          <div class="col-md-2 "></div>
        </div>

        <div class="row m-3">
          <div class="col-md-2"></div>
          <div class="card col-12 col-md-4 my-4">
            {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
            <div class="card-body">
              <h5 class="card-title text-secondary fw-bold">Programming</h5>
              <p class="card-text text-muted fw-light">
                not a <span>PRO</span>-grammer, but in making
              </p>
              <a href="" class="btn btn-outline-secondary w-75">
                Just Click Here
              </a>
            </div>
          </div>

          <div class="card col-12 col-md-4 my-4">
            {/* <!-- <img src="..." class="card-img-top" alt="..."> --> */}
            <div class="card-body">
              <h5 class="card-title text-secondary fw-bold">Education</h5>
              <p class="card-text  text-muted fw-light">
                Checkout My Education History{" "}
              </p>
              <a href="" class="btn btn-outline-secondary w-75">
                Timeline{" "}
              </a>
            </div>
          </div>
          <div class="col-md-2 "></div>
        </div>
      </div>
    </div>
  );
}

export default About;
