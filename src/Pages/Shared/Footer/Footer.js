import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneVolume,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container footer1">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container">
                <h1 className="mt-5">Noor Construction</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    SELLING? WE HAVE 1000's OF CLIENTS COMING TO VIEW PROPERTIES
                    IN ALL AREAS AND PRICE RANGES ... get started now
                  </small>
                </p>

                <p className="mt-5">
                  <small>Noor Construction © 2023</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <a className="text-light" href="/home">
                    <li className="footer-menu">Home</li>
                  </a>
                  <a className="text-light" href="/about">
                    <li className="footer-menu">About</li>
                  </a>
                  <a className="text-light" href="/services">
                    <li className="footer-menu">Services</li>
                  </a>
                  <a className="text-light" href="#">
                    <li className="footer-menu">Design</li>
                  </a>
                  <a className="text-light" href="/contact">
                    <li className="footer-menu">Contuct Us</li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the Modern Appartment</h3>
                <input
                  className="footer-input"
                  type="text"
                  placeholder="Enter Email"
                />
                <div className="phone d-flex align-items-center justify-content-center mt-4">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>+8801516067972</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                  </div>
                  <div>
                    <p>
                      1200 Gabtoli, Narsingdi, Dhaka.
                      <br /> Dhaka,Narsingdi Shadar, Narsingdi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
