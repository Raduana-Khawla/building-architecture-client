import React from "react";
import "./Home.css";
import Banner from "../Shared/Banner/Banner";
import design1 from "../Shared/img/design1.png";
import design4 from "../Shared/img/design4.png";
import design2 from "../Shared/img/design2.png";
import design3 from "../Shared/img/design3.png";
import service1 from "../Shared/img/serviceicon1.jpg";
import constImg1 from "../Shared/img/constImg1.png";
import constImg2 from "../Shared/img/constImg2.png";
import constImg3 from "../Shared/img/constImg3.png";
import service2 from "../Shared/img/serviceicon2.jpg";
import service3 from "../Shared/img/serviceicon3.jpg";
import construction1 from "../Shared/img/construction1.png";
import apartmentImg1 from "../Shared/img/apartmentImg1.png";
import apartmentImg2 from "../Shared/img/apartmentImg2.png";
import apartment1 from "../Shared/img/apartment1.png";
import home3 from "../Shared/img/home-3.jpg";
import Review from "../../Components/Review/Review";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-3">
        <div className="row banner-design2">
          <div className="col-md-3 col-sm-12">
            <div className="card banner-design  h-75 m-2 pb-5">
              <div className="card-body text-center">
                <img src={design1} className="h-30 w-25" alt="" />
                <h5 className="card-title mt-3">Duplex Layout</h5>
                <p className="card-text text-start">
                  An apartment with three floors can be referred to as a
                  triplex.Strangely however, and rather confusingly, in the USA,
                  a 'duplex' is a dwelling.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card banner-design  h-75 m-2 pb-5">
              <div className="card-body text-center">
                <img src={design4} className="h-30 w-25" alt="" />
                <h5 className="card-title mt-3">High-Level Security</h5>
                <p className="card-text text-start">
                  The system maintains a highly detailed access and
                  authorization scheme defining Access control and system
                  action.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card banner-design h-75 m-2 pb-5">
              <div className="card-body text-center">
                <img src={design2} className="h-30 w-25" alt="" />
                <h5 className="card-title mt-3">Royal Touch Paint</h5>
                <p className="card-text text-start">
                  Luxury is just a brushstroke away with Royale Luxury Emulsion.
                  It’s the only paint emulsion in India equipped with Teflon
                  surface.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-12">
            <div className="card banner-design h-75 m-2 pb-5">
              <div className="card-body text-center">
                <img src={design3} className="h-30 w-25" alt="" />
                <h5 className="card-title mt-3">Large Playground</h5>
                <p className="card-text text-start ">
                  Millions of Americans live in apartments. According to the
                  National Apartment Association (NAA),39 million Americans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="services-area pt-5">
        <div className="container">
          <h1>overview our services</h1>
          <div>
            <div>
              <h2 className="pt-3 pb-3">Building Design</h2>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-sm-12 col-12 pb-3">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img src={service1} className="img-setup " alt="" />
                      </div>
                      <a className="card-title text-center">House</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12 col-12 pb-3">
                  <div className="card shadow-sm p-3  rounded border border-0 ">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img src={service2} className="img-setup" alt="" />
                      </div>
                      <a className="card-title text-center">Institute</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3 col-12 pb-3">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={service3}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Religious</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3 col-12 pb-3">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <img src={home3} className="w-100 h-100" alt="" />
                      <h2 className="pt-3">Crafting Iconic Structures</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular-services">
              <h2 className="pt-5 pb-3">Building Construction</h2>
              <div className="row">
                <div className="col-md-3 col-sm-12  col-lg-3 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <img src={construction1} className="w-100 h-100" alt="" />
                      <h2 className="pt-2">Bagan Bari Eaden Girden</h2>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={constImg1}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Tools</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={constImg2}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Labour</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-12 col-lg-3 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={constImg3}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Architect</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="popular-services">
              <h2 className="pt-5 pb-3">Apartment</h2>
              <div className="row my-3">
                <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={apartmentImg1}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Building Booking</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-center">
                        <img
                          src={apartmentImg2}
                          className="img-setup d-flex justify-content-center"
                          alt=""
                        />
                      </div>
                      <a className="card-title text-center">Building Rent</a>
                      <p className="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4 col-sm-12 col-12">
                  <div className="card shadow-sm p-3  rounded border border-0 h-100">
                    <div className="card-body">
                      <img src={apartment1} className="w-100 h-75" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <a href="/apartmentBooking">see more</a>
          </div>
        </div>
      </div>
      <Review></Review>
    </div>
  );
};
export default Home;
