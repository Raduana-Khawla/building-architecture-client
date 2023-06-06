import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1>Build your House</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          voluptatibus voluptates dolorum quis ullam .
        </p>
        <div>
          <button className="button1" type="button">
            <span className="span"></span>Larn More
          </button>
          <button className="button1" type="button">
            <span className="span"></span>
            <Link className="text-light" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
