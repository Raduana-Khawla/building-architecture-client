import React from "react";
import banner from "../../Pages/Shared/Video/pexels-kindel-media-7578552.mp4";
import sellFlat from "../../Pages/Shared/img/sellFlat1.jpg";
import "./News.css";
const News = () => {
  return (
    <>
      <section className="top-banner d-flex mb-5 mt-3">
        <div className="row">
          <div className="col-md-5 col-sm-5 col-12 ps-5">
            <h1>Welcome To</h1>
            <h1>
              <span className="color">Noor Construction</span> website!
            </h1>
            <h3>Build Climber and Train Stopper</h3>
            <p>
              You might saw me jumping, climbing buildings and stopping trains.
              But no body pays me a dime for that work. That's why I am learning
              and mastering web development.I will not stop until I become the
              Web Development Hero.
            </p>
            <a
              className="link-button"
              target="_blank"
              href="https://www.linkedin.com/in/raduana-khawla-279873182/"
            >
              LEARN MORE
            </a>
          </div>
          <div className="col-md-7 col-sm-7 col-12 mt-3">
            <video autoPlay loop muted style={{ height: 350, width: "100%" }}>
              <source src={banner} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="container my-3">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-12">
            <img src={sellFlat} alt="" className="w-100 h-100" srcset="" />
          </div>
          <div className="col-md-6 col-sm-6 col-12">
            <h2 className="bold">
              Brand New Hatirjeel Dhaka Air-conditioned Flat
            </h2>
            <p className="">
              Noor Construction Ltd. is a company started its journey in 2007
              with the vision of changing the present Real Estate buildings of
              Bangladesh. The company is backed by 28 years experienced
              management as well as technical & financial strong support. Though
              the present market scenario of the country is not very
              encouraging, but the potentiality of the present market ensures
              the success of the Developers who will have innovation in design,
              structurally sound building and above all the commitments of
              business ethics. Nodi Bangla has already earned the reputation of
              making first class building in different cities in Bangladesh. The
              company feels proud to have many landmark projects within such a
              short span of time. at different locations in Narssingdi,
              Madhabdi, Baburhar, Bhairab, Mymensing, Bogra, Laxmipur etc with
              the belief ‘’Quality creates the demand’’
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default News;
