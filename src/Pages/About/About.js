import React from "react";
import "./About.css";
import aboutImage from "../../Pages/Shared/img/CEO.jpg";
import Member from "../Member/Member";
import groupPic from "../../Pages/Shared/img/groupPic.jpg";
const About = () => {
  return (
    <>
      <section className="my-5 container colorfull">
        <div className="row">
          <div className="col-md-5 col-lg-5 col-sm-12 col-12 mb-3">
            <img className="img-fluid rounded-circle" src={aboutImage} alt="" />
          </div>
          <div className="col-md-6 col-lg-6 col-sm-12 col-12 mb-2 mt-5 text-center">
            <h4>
              <span className="text-white">Welcome to Noor Construction</span>
            </h4>
            <br />
            <h3 className="text-center fw-bolder w-50">
              To persevere with faithfulness
            </h3>
            <p className="mt-5">
              Civil engineering is a branch of engineering that deals with the
              design, construction, and maintenance of infrastructure, such as
              buildings, roads, bridges, tunnels and water supply and sewage
              systems. Civil engineers use their knowledge of mathematics,
              physics, and materials science to create functional and safe
              structures that meet the needs of society.
            </p>
            <br />
            <p className="text-white"></p>
          </div>
        </div>
      </section>
      <section className="container my-3">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-12 col-12">
            <p className="text-start mt-3">
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
          <div className="col-md-6 col-lg-6 col-sm-12 col-12">
            <img src={groupPic} alt="" className="w-100 h-100" srcset="" />
          </div>
        </div>
      </section>
      <section>
        <div className="bg-light text-center py-5">
          <h2>Our Team Members</h2>
          <Member></Member>
        </div>
      </section>
    </>
  );
};
export default About;
