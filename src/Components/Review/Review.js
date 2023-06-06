import React from "react";
import ReviewPic1 from "../../Pages/Shared/img/team-1.jpg";
import ReviewPic2 from "../../Pages/Shared/img/team-2.jpg";
import ReviewPic3 from "../../Pages/Shared/img/team-3.jpg";

const Review = () => {
  return (
    <>
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="fw-bold mb-4">Why Us?</h2>
              <p className="lead mb-4">
                we works for the internal changes and modifications of any
                apartment at that time of nearing the completion of the
                projects. Professionals of this department understand customers
                needs accordingly these are reflected in the apartment premises.
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-speedometer2 fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold mb-3">8 Years Experience</h5>
                  <p>
                    Noor Construction is a company started its journey in 2015
                    with the vision of changing the present Real Estate
                    buildings of Bangladesh.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-layout-text-window-reverse fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold mb-3">Certified Experience</h5>
                  <p>
                    Traditional architectural design is failing to meet the
                    requirements of the life-styles of to-days city dwellers.
                    Our design is covering not only the to-day’s life style.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card border-0 shadow">
                <div className="card-body text-center">
                  <i className="bi bi-phone fs-1 text-primary mb-3"></i>
                  <h5 className="fw-bold mb-3">We got the tools</h5>
                  <p>
                    Though the present market scenario of the country is not
                    very encouraging,structurally sound building and above all
                    the commitments of business ethics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
            <div className="card border-0 shadow">
              <div className="card-body p-5">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <img
                      src={ReviewPic1}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h4 className="fw-bold mb-0">John Doe</h4>
                    <p className="text-muted">May 11, 2023</p>
                    <div className="rating">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                  felis vel purus pulvinar auctor quis vel nunc.
                </p>
                <p className="font-italic mb-0">
                  "Great service, I would definitely recommend it."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
            <div className="card border-0 shadow">
              <div className="card-body p-5">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <img
                      src={ReviewPic3}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h4 className="fw-bold mb-0">John Doe</h4>
                    <p className="text-muted">May 11, 2023</p>
                    <div className="rating">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                  felis vel purus pulvinar auctor quis vel nunc.
                </p>
                <p className="font-italic mb-0">
                  "Great service, I would definitely recommend it."
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 mx-auto">
            <div className="card border-0 shadow">
              <div className="card-body p-5">
                <div className="row mb-4">
                  <div className="col-sm-6">
                    <img
                      src={ReviewPic2}
                      alt=""
                      className="rounded-circle img-fluid"
                    />
                  </div>
                  <div className="col-sm-6">
                    <h4 className="fw-bold mb-0">John Doe</h4>
                    <p className="text-muted">May 11, 2023</p>
                    <div className="rating">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star text-warning"></i>
                    </div>
                  </div>
                </div>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
                  felis vel purus pulvinar auctor quis vel nunc.
                </p>
                <p className="font-italic mb-0">
                  "Great service, I would definitely recommend it."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
