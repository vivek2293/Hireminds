import React from "react";
import image from "./Assets/5.svg";
import image2 from "./Assets/3.svg";
import image3 from "./Assets/2.svg";
import image4 from "./Assets/7.svg";
import logo from "./Assets/Logo.png";
import Lottie from "lottie-react";

import animatelogo from "./Assets/logo.json"
import "./CSS/Homepage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faPhone, faMailReply } from "@fortawesome/free-solid-svg-icons";

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
              <img src={logo} style={{ height: '20vh' }} className="mt-2"></img>

            </div>
            <div className="col-md-6" id="login-div">

              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div1"
              >
                <button
                  type="submit"
                  className="btn btn-custom1 p-1 mt-1 shadow bg-white rounded"
                  style={{ height: "6vh", width: "9vw" }}
                  onClick={() => window.location.href = "/login"}
                >
                  Login
                </button>
              </div>
              <div
                className="btn-div d-flex justify-content-center mx-2 my-1"
                id="btn-div2"
              >
                <button type="submit"
                  className="btn btn-custom1 p-1 mt-1 shadow bg-white rounded"
                  style={{ height: "6vh", width: "9vw" }}
                  onClick={() => window.location.href = "/register"}
                  >
                  Register
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="row ">
              <div className="col-md-7 example-div">
                <div className="head-div">
                  <h1 className="ms-2 px-3 mt-1" style={{ color: 'rgb(120,123,206)' }}>Heading</h1>
                </div>
                <div className="d-flex align-items-center mainpg-text-div" style={{ height: '70%' }}>
                  <p className="ms-2 col-8 px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt sapiente dolore, ratione quam placeat voluptas nobis aspernatur esse animi accusamus dicta veritatis deleniti doloribus ea explicabo eos doloremque repellendus quasi eligendi autem totam sed. Quasi similique facere saepe quidem!
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
                    <h1 className="ms-2 mb-3 col-8 px-3" style={{ color: 'rgb(120,123,206)' }}>Heading</h1>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mainpg-text-div1" style={{ height: '25vh' }}>
                    <p className="ms-2 col-8 px-3">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt sapiente dolore, ratione quam placeat voluptas nobis aspernatur esse animi accusamus dicta veritatis deleniti doloribus ea explicabo eos doloremque repellendus quasi eligendi autem totam sed. Quasi similique facere saepe quidem!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-7 ">
                <div className="head-div2">
                  <h1 className="ms-2 px-3" style={{ color: 'rgb(120,123,206)' }}>Heading</h1>
                </div>
                <div className="d-flex align-items-center mainpg-text-div2" style={{ height: '70%' }}>
                  <p className="ms-2 col-8 px-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit deserunt sapiente dolore, ratione quam placeat voluptas nobis aspernatur esse animi accusamus dicta veritatis deleniti doloribus ea explicabo eos doloremque repellendus quasi eligendi autem totam sed. Quasi similique facere saepe quidem!
                  </p>
                </div>
              </div>
              <div className="col-md-5">
                <img src={image4}></img>
              </div>
            </div>
            <div className="footer-upperdiv pb-3">
              <div className="d-flex row justify-content-around">
                <div className="col-md-3" id="first-one">
                  <div className="logo mt-5 mb-1"><h4 id="Main-head">Team Byte Bandits</h4></div>
                  <div className="text my-3"><p id="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui non corrupti, possimus deserunt sunt maxime impedit magni vero vitae itaque.</p></div>
                </div>
                <div className="col-md-3">
                  <div className="contact-me mt-5 mb-1">
                    <h5 id="contact">Contact Us</h5>
                  </div>
                  <div className="social-links">
                    <ul className="mt-4">
                      <li className="random my-2"><FontAwesomeIcon icon={faMapLocationDot} className="icons media-links me-2"></FontAwesomeIcon>Via Vesu, Surat India</li>
                      <li className="random my-2"><FontAwesomeIcon icon={faPhone} className="icons media-links me-2"></FontAwesomeIcon> Phone: (0039) 333 12 68 347</li>
                      <li className="random my-2"><FontAwesomeIcon icon={faMailReply} className="icons media-links me-2"></FontAwesomeIcon>Email: hello@domain.com</li>
                      <li className="random my-2"><FontAwesomeIcon icon={faSkype} className="icons media-links me-2"></FontAwesomeIcon>Skype: you_online</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="link mt-5 mb-1"><h5 id="links">Links</h5></div>
                  <div className="content d-flex">
                    <div className="col-md-6">
                      <ul>
                        <li className="mt-3 mb-2 lists">Home</li>
                        <li className="my-2 lists">Feature</li>
                        <li className="my-2 lists">Method</li>
                        <li className="my-2 lists">Our Clients</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li className="mt-3 mb-2 lists">Plans & Pricing</li>
                        <li className="my-2 lists">Affiliates</li>
                        <li className="my-2 lists">Terms</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-lowerdiv row py-3">
              <div className="col-md-3 copyright">HireMinds Copyright © 2023 Byte Bandits</div>
              <div className="col-md-3"></div>
              <div className="col-md-3 row social-media" id="testing">
                <ul id="display">
                  <li className="m-2 handles"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></li>
                  <li className="m-2 handles"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></li>
                  <li className="m-2 handles"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></li>
                  <li className="m-2 handles"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></li>
                  <li className="m-2 handles"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;
