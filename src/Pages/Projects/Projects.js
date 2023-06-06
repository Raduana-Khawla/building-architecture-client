import React from "react";
import "./Projects.css";
import newsImg1 from "../Shared/img/newsImg1.jpg";
import newsImg2 from "../Shared/img/newsImg2.jpg";
import newsImg3 from "../Shared/img/newsImg3.jpg";
import newsImg4 from "../Shared/img/newsImg4.jpg";

const Projects = () => {
  return (
    <>
      <div className="news-title my-3">
        <h2 className="my-3">
          <span className="fs-1 fw-bold text-dark">Complete Projects</span>
        </h2>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card mb-3" style={{ maxWidth: " 540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={newsImg2}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
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
          <div className="col-md-6 col-sm-6 col-12">
            <div className="card mb-3" style={{ maxWidth: " 540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={newsImg2}
                    className="img-fluid rounded-start h-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
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
      {/* <div className="container">
        <div className="row news-title2">
          <div className="col-md-12 col-sm-12 col-12">
            <h2>
              <span className="fs-1 fw-bold text-secondary">Blogs</span>
            </h2>
            <div>
              <h1>1.Baduwar chor Model Madrasah</h1>
              <p>
                The first site on our list is the official tourism guide to the
                city of Telluride, Colorado.
              </p>
              <img className="img-fluid w-75 h-75 mb-3" src={newsImg3} alt="" />
              <p>
                Right from the start, a prominent image gallery does a lot of
                the selling on the website for Telluride.
              </p>
              <p>
                Bymaking the images so large, the site makes sure the first
                thing you see is a beautiful landscape.
              </p>
              <p>
                This is an example of a site that relies less on copy. Instead
                of a detail-heavy approach, the design focuses more on the
                picturesque views and various activities in action.
              </p>
              <p>
                Once a visitor is drawn in by the photos, they can opt to click
                on the main call to action, “Plan Your Spring Trip” for more
                information.
              </p>
              <p>
                From there, visitors can read about the various activities they
                can do in the city, then purchase any necessary tickets, passes,
                or equipment rentals.
              </p>
              <p>
                This approach works, because it combines attention-grabbing
                imagery with a clear call to action.
              </p>
              <br />
            </div>
            <div className="col-md-12 col-sm-12 col-12">
              <h1>2.Bilasdi House,Gazipur, on 28 August 2021</h1>
              <p>Visit Brasil is the country’s official tourism site.</p>
              <img src={newsImg4} alt="" />
              <p>
                On the surface, you might think that arranging this site would
                be a simple process.
              </p>
              <p>
                After all, how difficult could it be to persuade visitors to
                check out beautiful beaches and hikes through the Amazon?
              </p>
              <p>
                But considering that Brazil is a huge country, making up almost
                half of the continent of South America, the site has a lot of
                information to cover.
              </p>
              <p>
                It does this by dividing the various regions into different
                “Experiences.”
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Projects;
