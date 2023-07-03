import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ApartmentBooking.css";

const ApartmentBooking = () => {
  const [services, setServices] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/apartmentBooking`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  const handleSearchBtn = () => {
    if (searchValue) {
      const result = services.filter((post) =>
        post.excelBlog.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResult(result);
      setSearchValue("");
    } else {
      setSearchValue("");
    }
  };
  return (
    <section className="bg mt-5">
      <div className="container my-5">
        <div className="section-title text-center">
          <h5 className="text-white pt-3">PROPERTY</h5>
          <h2>Our Property and Its Availabilities</h2>
        </div>

        {/* Search */}
        <div className="row">
          <div className="col-md-10 col-sm-10 mx-3">
            <div>
              <div className=" d-flex search-container">
                <input
                  type="text"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                  placeholder="Search Post"
                />
                <button
                  className="bg-primary text-light px-3"
                  onClick={handleSearchBtn}
                >
                  Search
                </button>
              </div>
              <div>
                {searchResult?.map((item, index) => (
                  <h6 key={index} className="text-dark">
                    <Link to={`/services/${item._id}`}>{item.location}</Link>
                  </h6>
                ))}
              </div>
            </div>
            <br />
            <br />
            <div>
              <h2>
                <u>Posts</u>
              </h2>
              <h4 className="mb-5">
                <u>Total Posts - {services.length}</u>
              </h4>
              {services?.map((pd, index) => {
                return (
                  <div key={index} className="text-start mx-5">
                    <Link to={`/services/${pd._id}`}>
                      {index}){pd?.Title}
                      {pd?.length}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div></div>

        <div className="row">
          {services?.map((pd, index) => (
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
                    <h5>{pd.location}</h5>
                    <p>
                      <small className="text-black">{pd.description}</small>
                      <h4 className="m-3">Price: ${pd.price}</h4>
                    </p>
                  </div>{" "}
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

export default ApartmentBooking;
