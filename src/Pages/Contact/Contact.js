import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
export default function Contact() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nsnj7qk",
        "template_9e6l7r7",
        form.current,
        "WEkNCy9JEhMKa66LE"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Success");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="container my-5 body">
      <section id="contact" className="container-fluid  py-5">
        <div className="container overflow-hidden my-custom-tb-margin">
          <h4 className="text-center text-danger">
            Haven't found what you want?
          </h4>
          <h1 className="text-center text-light bold my-3">Contact Us</h1>
          <p className="text-center text-light">
            This type of Website provides building constructed care, the cost of
            which is covered by the funding the receives from the government.
          </p>
          <p className="text-center text-light">
            The government hospitals is a good healthcare that is available to
            all, regardless of their wealth.
          </p>

          <div className="d-flex align-items-center justify-content-center p-4">
            <i className="fas fas fa-headphones fs-2 text-primary"></i>
            <a
              className="nav-link active text-decoration-none text-primary fs-4 fw-bold"
              aria-current="page"
              href="tel:09600-730073"
            >
              09600730073
            </a>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className=" p-4">
                <div className="text-center border p-4">
                  <h3 className="text-warning bg-dark p-2">Contact Form</h3>
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        name="user_email"
                        className="form-control bg-light"
                        placeholder="Enter your Email Address *"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control bg-light"
                        placeholder="Enter your Name *"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <textarea
                        name="message"
                        className="form-control bg-light"
                        cols="30"
                        rows="5"
                        placeholder="Message *"
                      ></textarea>
                    </div>
                    <div className="form-group text-center">
                      <input
                        type="submit"
                        className="btn d-grid gap-2 col-6 mx-auto btn-danger"
                        value="Send"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12 p-4">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7306.003958355313!2d90.42967377311696!3d23.711623361579026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9cc7d566d03%3A0x2472a49ac0504cd2!2sJatra%20Bari%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1634736049062!5m2!1sen!2sbd"
                width="100%"
                style={{ border: 0, height: "100%" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
