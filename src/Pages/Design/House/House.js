import React, { useEffect, useState } from "react";
import "./House.css";
import home1 from "../../Shared/img/home-1.jpg";
import home2 from "../../Shared/img/home-2.jpg";
import home3 from "../../Shared/img/home-3.jpg";
import home4 from "../../Shared/img/home-4.jpg";
const House = () => {
  const [houseDesigns, sethouseDesigns] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/homeDesign`)
      .then((res) => res.json())
      .then((data) => sethouseDesigns(data));
  }, []);
  console.log(houseDesigns);
  return (
    <div>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={home2} className="d-block w-100 house-img" alt="home2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={home3} className="d-block house-img w-100" alt="home3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={home4} className="d-block house-img w-100" alt="home4" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="container mt-5">
        <div className="card mb-3">
          {/* {houseDesigns?.map((pd, index) => ( */}
          <div className="row g-0">
            <div className="col-md-3 ">
              <div className="card-body">
                <h5 className="card-title fs-2 text-center text-dark bold">
                  Dream Home
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p>
                  <a href="#" className="btn center btn-primary">
                    Go somewhere
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-3 gap-2">
              <img
                src="https://i.ibb.co/DVN13Md/home-1.jpg"
                className="w-100 h-100 img-fluid rounded-start"
                alt="img1"
              />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title fs-2 text-dark text-center bold">
                  Sweet Home
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={home2}
                className="w-100 h-100 img-fluid rounded-start"
                alt="img2"
              />
            </div>
          </div>
          <div className="row g-0">
            <div className="col-md-3">
              <img
                src={home4}
                className="w-100 h-100 img-fluid rounded-start"
                alt="img2"
              />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title fs-2 text-center text-dark bold">
                  Paradise
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <img
                src={home3}
                className="w-100 h-100 img-fluid rounded-start"
                alt="img2"
              />
            </div>
            <div className="col-md-3">
              <div className="card-body">
                <h5 className="card-title fs-2 text-center text-dark bold">
                  Shifa's House
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          {/* // ))} */}
        </div>
      </section>
    </div>
  );
};
export default House;
