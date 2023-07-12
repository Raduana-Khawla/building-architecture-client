import React, { useEffect, useState } from "react";
import Service from "./Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [val, setVal] = useState("");
  useEffect(() => {
    fetch(`http://localhost:8000/apartmentBooking`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);

  return (
    <section className="bg-secondary py-3">
      <div className="container my-3">
        <div className="section-title text-center">
          <h5 className="text-white pt-3">PROPERTY</h5>
          <h2>Our Property and Its Availabilities</h2>

          <div className="main">
            <input
              list="data"
              onChange={(e) => setVal(e.target.value)}
              placeholder="Search"
            />
          </div>
          <datalist id="data">
            {services?.map((service) => (
              <option>{service.location}</option>
            ))}
          </datalist>

          <div className="row">
            {/* render Packages from server side */}
            {services?.map((service) =>
              val.length > 0 ? (
                service.location == val && (
                  <Service key={service._id} service={service}></Service>
                )
              ) : (
                <Service key={service._id} service={service}></Service>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
