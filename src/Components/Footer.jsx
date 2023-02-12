import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedin, faTwitter, faSkype, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapLocationDot, faPhone, faMailReply } from "@fortawesome/free-solid-svg-icons";

function Footer() {

  // It returns the structure of this particular page

  return (
    <>
      <div className="footer-upperdiv pb-3">
        <div className="d-flex row justify-content-around">
          <div className="col-md-3" id="first-one">
            <div className="logo mt-5 mb-1"><h4 id="Main-head">Team Byte Bandits</h4></div>
            <div className="text my-3">
              <p id="desc">
                We firmly believe in empowering higher education institutions to streamline the campus placement process in a way that suits their unique needs and requirements.
              </p>
            </div>
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
    </>
  )
}

export default Footer