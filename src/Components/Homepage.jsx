import React from "react";
import image from "./Assets/5.svg";
import image2 from "./Assets/3.svg";
import image3 from "./Assets/2.svg";
import image4 from "./Assets/7.svg";
import logo from "./Assets/Logo.png";
import "./CSS/Homepage.css";
import Footer from "./Footer";

function Homepage() {
  return (
    <>
      <section style={{ width: "100vw" }} className="row" id="container">
        <div className="container-fluid">
          <img
            className="col-12"
            src={image}
            style={{ width: "100vw" }}
            id="backgroundImage"
          ></img>
          <div
            id="main-div1"
            style={{ height: "132vh" }}
            className=" col-md-12 d-flex justify-content-center align-items-start"
          >
            <div className="col-md-6" id="logo-div">
              <img src={logo} style={{ height: "15vh" }} className="mt-2"></img>
            </div>
            <div className="col-md-6" id="login-div">
              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div1"
              >
                <button
                  type="submit"
                  className="btn btn-outline-light p-1 mt-2"
                  style={{ height: "6vh", width: "9vw", fontWeight: "bold" }}
                  onClick={() => (window.location.href = "/login")}
                >
                  Login
                </button>
              </div>
              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div2"
              >
                <button
                  type="submit "
                  className="btn btn-outline-light p-1 mt-2 "
                  style={{ height: "6vh", width: "9vw", fontWeight: "bold" }}
                  onClick={() => (window.location.href = "/register")}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col-md-7 example-div">
                <div className="head-div">
                  <h1
                    className="ms-2 px-3 mt-1 streamline"
                    style={{ color: "rgb(120,123,206)"}}
                  >
                    Streamlining Placements
                  </h1>
                </div>
                <div
                  className="d-flex align-items-center mainpg-text-div"
                  style={{ height: "70%" }}
                >
                  <p className="ms-2 col-8 px-3">
                    Are you tired of the complex and time-consuming campus placement process in higher education institutions? Look no further! Our solution simplifies the placement process and reduces the burden on training and placement cells.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={image2}></img>
              </div>
            </div>
            <div className="row my-2">
              <div className="col-md-5">
                <img src={image3}></img>
              </div>
              <div className="col-md-7 justify-content-end">
                <div className="row justify-content-end">
                  <div className="head-div1 d-flex justify-content-center">
                    <h1
                      className="ms-2 mb-3 col-8 px-3"
                      style={{ color: "rgb(120,123,206)" }}
                    >
                      Optimized Placements
                    </h1>
                  </div>
                  <div
                    className="d-flex justify-content-center align-items-center mainpg-text-div1"
                    style={{ height: "25vh" }}
                  >
                    <p className="ms-2 col-8 px-3">
                      With our platform, you can automate the process of data entry and cleaning, so you don't have to spend hours on manual tasks. And if you choose, you can also take advantage of our resume shortlisting feature, which saves you even more time by pre-screening resumes for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-7 ">
                <div className="head-div2">
                  <h1
                    className="ms-2 px-3"
                    style={{ color: "rgb(120,123,206)" }}
                  >
                    Optimizing it your way
                  </h1>
                </div>
                <div
                  className="d-flex align-items-center mainpg-text-div2"
                  style={{ height: "70%" }}
                >
                  <p className="ms-2 col-8 px-3">
                    We understand that every institution is unique, and that's why we've made our platform customizable to fit your specific needs. Our platform offers a range of options and features, allowing you to tailor it to your individual requirements and streamline the campus placement process in a way that works best for you and your students.
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={image4}></img>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
