import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/apartmentBooking")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <section className="mt-5">
      <div className="container my-5">
        <div className="section-title text-center">
          <h5 className="text-black pt-3">PROPERTY</h5>
          <h2 className="text-black">Our Property and Its Availabilities</h2>
        </div>
        <div className="row p-3">
          {services?.map((pd, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 col-12 mb-3">
              <div className="property1 card shadow-sm  rounded h-100 p-3">
                <div className="property-card-img">
                  <a href="property-details.html">
                    <img
                      className="card-img-top w-100 h-75 rounded"
                      src={pd?.imageURL}
                      alt="Images"
                    />
                  </a>
                </div>
                <div className="px-3">
                  <h4 className="text-center">{pd.name}</h4>
                  <h4 className="text-black">Price: ${pd.price}/m</h4>

                  <p className="text-black">
                    <small>{pd.description}</small>
                  </p>
                  <ul className="d-flex text-black justify-content-between">
                    <li>Dining: 01</li>
                    <li>Sq. feet: 120</li>
                    <li>Bathroom: 03</li>
                  </ul>
                  <ul className="d-flex text-black justify-content-between">
                    <li>Garage: 01</li>
                    <li>Drawing: 03</li>
                    <li>Bathroom: 04</li>
                  </ul>
                </div>

                <div className="btn">
                  <Link to={`/service/${pd._id}`}>
                    {" "}
                    <button className="btn btn-success">Order Now</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManageProducts;
