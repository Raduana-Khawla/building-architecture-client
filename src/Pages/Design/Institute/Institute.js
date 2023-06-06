import React from "react";
import "./Institute.css";
import institute1 from "../../Shared/img/institute1.jpg";
import institute2 from "../../Shared/img/institute2.jpg";
import institute3 from "../../Shared/img/institute3.jpg";
import institute4 from "../../Shared/img/institute4.jpg";
import institute5 from "../../Shared/img/institute5.jpg";
import institute6 from "../../Shared/img/institute6.jpg";
import institute7 from "../../Shared/img/institute7.jpg";
import institute8 from "../../Shared/img/institute8.jpg";

const Institute = () => {
  return (
    <div>
      <section className="projects">
        <div className="container gallery-container">
          <div className="tz-gallery">
            <div className="row projectWrap ">
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="bharatesh-education-trust.php">
                    <img
                      className="h-70 w-100"
                      src={institute1}
                      alt="Best Architects In India"
                      title="Best Architects In India"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Bharatesh Education Trust, Belgaum
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="blueridge-school.php">
                    <img
                      className="h-70 w-100"
                      src={institute2}
                      alt="Top Interior Designers In Pune"
                      title="Top Interior Designers In Pune"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Blueridge School, Hinjewadi
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a
                    className="lightbox"
                    href="sardar-mahadeo-balwant-natu-auditorium.php"
                  >
                    <img
                      className="h-70 w-100"
                      src={institute3}
                      alt="Sardar Mahadeo Balwant Natu Auditorium"
                      title="Sardar Mahadeo Balwant Natu Auditorium"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Bharatiya Vidya Bhavan’s Sardar Mahadeo Balwant Natu
                          Auditorium, Shivajinagar, Pune
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-6 col-md-8">
                <div className="img">
                  <a className="lightbox" href="paranjape-vidya-mandir.php">
                    <img
                      className="h-70 w-100"
                      src={institute4}
                      alt="Paranjape Vidya Mandir"
                      title="Paranjape Vidya Mandir"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Bharatiya Vidya Bhavan’s Paranjape Vidya Mandir,
                          Kothrud, Pune
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="shri-chitrapur-math.php">
                    <img
                      className="h-70 w-100"
                      src={institute5}
                      alt="Shri Chitrapur Math"
                      title="Shri Chitrapur Math"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Shri Chitrapur Math, Shirali, Uttar Karnataka
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="nift-mumbai.php">
                    <img
                      className="h-70 w-100"
                      src={institute6}
                      alt="Architects &amp; Interior Designers In Pune"
                      title="Architects &amp; Interior Designers In Pune"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          TASMAC, Viman Nagar, Pune
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="shri-chitrapur-math.php">
                    <img
                      className="h-70 w-100"
                      src={institute7}
                      alt="Shri Chitrapur Math"
                      title="Shri Chitrapur Math"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">
                          Shri Chitrapur Math, Shirali, Uttar Karnataka
                        </h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-md-4">
                <div className="img">
                  <a className="lightbox" href="nift-mumbai.php">
                    <img
                      className="h-70 w-100"
                      src={institute8}
                      alt="Architects &amp; Interior Designers In Pune"
                      title="Architects &amp; Interior Designers In Pune"
                    />
                    <div className="overlay">
                      <div className="overlayIn">
                        <h4 className="text-light">NIFT Mumbai, Navi Mumbai</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Institute;
