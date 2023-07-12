import React from "react";
import "./Member.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import team1 from "../Shared/img/CEO.jpg";
import team2 from "../Shared/img/newsImg3.jpg";
import team3 from "../Shared/img/team-3.jpg";
const Member = () => {
  return (
    <div className="container my-5">
      <div id="team" className="row">
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="card shadow-sm p-3  rounded border border-0 h-100">
            <div className="card-body ">
              <div className="d-flex justify-content-center">
                <img
                  src={team1}
                  shadow-sm
                  p-3
                  rounded
                  alt=""
                  className="img-fluid rounded-circle w-50 mb-3"
                />
              </div>
              <div className="card-text">
                <h6>Raduana Khawla</h6>
                <h6>Web Developer</h6>
                <h6>Jagannath University</h6>
              </div>
            </div>
            <div className="icons-container control">
              <div className="icon">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="card border border-0 h-100 shadow-sm p-3 rounded">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <img
                  src={team2}
                  alt=""
                  className="img-fluid rounded-circle w-50 mb-3"
                />
              </div>
              <div className="card-text">
                <h6>Raduana Khawla</h6>
                <h6>Web Developer</h6>
                <h6>Jagannath University</h6>
              </div>
            </div>
            <div className="icons-container control">
              <div className="icon ">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
          <div className="card h-100 border border-0 shadow-sm p-3 rounded">
            <div className="card-body">
              <div className="d-flex justify-content-center">
                <img
                  src={team3}
                  alt=""
                  className="img-fluid rounded-circle w-50 mb-3"
                />
              </div>
              <div className="card-text">
                <h6>Raduana Khawla</h6>
                <h6>Web Developer</h6>
                <h6>Jagannath University</h6>
              </div>
            </div>
            <div className="icons-container control">
              <div className="icon ">
                <FontAwesomeIcon icon={faInstagramSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faYoutube} />
              </div>
              <div className="icon ">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Member;
