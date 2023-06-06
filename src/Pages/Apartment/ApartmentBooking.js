import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApartmentBooking.css";

const ApartmentBooking = () => {
  const [ApartmentBookings, setApartmentBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/apartmentBooking`)
      .then((res) => res.json())
      .then((data) => setApartmentBookings(data));
  }, []);
  console.log(ApartmentBookings);

  return (
    <section className="bg mt-5">
      <div className="container my-5">
        <div className="section-title text-center">
          <h5 className="text-white pt-3">PROPERTY</h5>
          <h2>Our Property and Its Availabilities</h2>
        </div>
        <div className="row">
          {ApartmentBookings?.map((pd, index) => (
            <div className="col-sm-12 col-md-4 mb-3">
              <div className="property1 card gap-2  h-100 rounded p-3">
                <div className="card-img">
                  <img
                    className="w-100 rounded"
                    src={pd?.imageURL}
                    alt="Images"
                  />
                </div>

                <div className="btn">
                  <div>
                    <h4>{pd.name}</h4>
                    <p>
                      <small className="text-black">{pd.description}</small>
                      <h4 className="m-3">Price: ${pd.price}</h4>
                    </p>
                  </div>{" "}
                  <button className="btn btn-success">Order Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApartmentBooking;
