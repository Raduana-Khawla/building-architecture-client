import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { name, location, price, imageURL, description, _id } = props?.service;

  return (
    <div className="col-lg-4 col-12 col-sm-12 col-md-4 mb-3">
      <div className="property1 card gap-2  h-100 rounded p-3">
        <div className="card-img">
          <img className="w-100 rounded" src={imageURL} alt="Images" />
        </div>
        <div className="btn">
          <div>
            <h4>{name}</h4>
            <h5>{location}</h5>
            <p>
              <small className="text-black">{description}</small>
              <h4 className="m-3">Price: ${price}</h4>
            </p>
          </div>{" "}
          <Link to={`/service/${_id}`}>
            {" "}
            <button className="btn btn-success">Order Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
