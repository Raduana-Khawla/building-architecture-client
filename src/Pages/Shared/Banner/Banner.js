import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1>Build your House</h1>
        <p className="m-3">
          Unleash the Power of Architectural Ingenuity: Transforming Visions
          into Timeless Structures. Where Dreams Take Shape: Crafting
          Exceptional Spaces for Generations to Come.Elevate Your World:
          Exquisite Craftsmanship and Impeccable Design. Innovate. Construct.
          Inspire: Redefining the Art of Building.Building with Excellence:
          Bridging the Gap Between Vision and Reality. Creating Landmarks,
          Building Legacies: Our Commitment to Extraordinary Construction.
          Building Dreams, Shaping Futures: Pioneering Construction Solutions.
        </p>
        <div>
          <button className="button1" type="button">
            <span className="span"></span>
            <a className="text-light buttons" href="/about">
              Larn More
            </a>
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
