import React from "react";
import image from "./Assets/5.svg";
import image2 from "./Assets/3.svg";
import image3 from "./Assets/2.svg";
import image4 from "./Assets/7.svg";
import logo from "./Assets/Logo.png";
import Lottie from "lottie-react";

import animatelogo from "./Assets/logo.json"
import "./CSS/Homepage.css";

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
            <img src={logo} style={{height : '13vh'}} className = "mt-2"></img>
            {/* <h1>Logo</h1> */}
            {/* <Lottie animationData={animatelogo} style={{ height: "10vh" }} /> */}

            </div>
            <div className="col-md-6" id="login-div">
              {/* <button className='btn btn-success mx-2' >Login</button> */}
              
              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div1"
              >
                <button
                  type="submit"
                  className="btn btn-custom1 p-1"
                  style={{ height: "6vh", width: "5vw" }}
                >
                  Login
                </button>
              </div>
              {/* <button className='btn btn-success mx-2'>Register</button> */}
              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div2"
              >
                <button type="submit" className="btn btn-custom1 p-1">
                  Register
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col-md-7 ">
                <h1 className="ms-2 mb-3 px-3" style={{color : 'rgb(120,123,206)'}}>Heading</h1>
                <p className="ms-2 col-8 px-3">
                  "But I must explain to you how all this mistaken idea of
                  denouncing pleasure and pra But I must explain to you how all
                  this mistaken idea of denouncing pleasure and pra "
                </p>
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
                  <h1 className="ms-2 mb-3 col-8 px-3" style={{color : 'rgb(120,123,206)'}}>Heading</h1>
                  <p className="ms-2 col-8 px-3">
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and pra But I must explain to you how
                    all this mistaken idea of denouncing pleasure and pra "
                  </p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-7 ">
                <h1 className="ms-2 mb-3 px-3" style={{color : 'rgb(120,123,206)'}}>Heading</h1>
                <p className="ms-2 col-8 px-3">
                  "But I must explain to you how all this mistaken idea of
                  denouncing pleasure and pra But I must explain to you how all
                  this mistaken idea of denouncing pleasure and pra "
                </p>
              </div>
              <div className="col-md-5">
                <img src={image4}></img>
              </div>
            </div>
            <div className="row " style={{minHeight : '30vh', backgroundColor : 'rgb(155,151,241)'}}>
                <h1>FOOTER</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
