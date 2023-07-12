import React from "react";
import "./Projects.css";
import newsImg1 from "../Shared/img/home001.jpg";
import newsImg2 from "../Shared/img/newsImg2.jpg";

const Projects = () => {
  return (
    <>
      <div className="news-title py-5">
        <h2 className="py-3">
          <span className="fs-1 fw-bold text-dark">Complete Projects</span>
        </h2>
        <div className="row p-5">
          <div className="col-md-6 col-lg-6 col-sm-12 col-12">
            <div className="card mb-3" style={{ maxWidth: " 540px" }}>
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                  <img
                    src={newsImg2}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                  <div className="card-body mt-3">
                    <h3 className="card-title bold">Kutha bari</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12  col-12">
            <div className="card mb-3" style={{ maxWidth: " 540px" }}>
              <div className="row g-0">
                <div className="col-md-4 col-lg-4 col-sm-12 col-12">
                  <img
                    src={newsImg1}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 col-lg-8 col-sm-12 col-12">
                  <div className="card-body mt-3">
                    <h3 className="card-title bold">Royal palace</h3>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
