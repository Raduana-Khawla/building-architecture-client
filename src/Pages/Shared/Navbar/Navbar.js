import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../../hooks/useFirebase";
import "./Navbar.css";
const Navbar = () => {
  const { admin, user, logout } = UseFirebase();

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-body">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.ibb.co/qrH7Hhq/imgbin-real-estate-logo-building-apartment-design-T740-Ff-Tx-BRrf-W6-D8-Jf-Pck-By-Ts-removebg.png"
              alt="Bootstrap"
              width="55"
              height="50"
            />
            <span className="text1 fw-bold">Noor Construction</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  <span className="text1">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  <span className="text1">About</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="text1">Our Services</span>
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item dropend">
                    <a
                      className="nav-link dropdown-toggle drop_item active"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text1">Design</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/house"
                        >
                          <span className="text1">House Design</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/institute"
                        >
                          <span className="text1">Institute Design</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/religious"
                        >
                          <span className="text1">Religious Building</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropend">
                    <a
                      className="nav-link dropdown-toggle drop_item active"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text1">Construction</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/tools"
                        >
                          <span className="text1">Tools</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/laborer"
                        >
                          <span className="text1">Laborer</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/architect"
                        >
                          <span className="text1">Architect</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropend">
                    <a
                      className="nav-link dropdown-toggle drop_item active"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="text1">Apartment</span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/apartmentBooking"
                        >
                          <span className="text1">Booking</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav-link drop_item active"
                          aria-current="page"
                          href="/apartmentRent"
                        >
                          <span className="text1">Rent</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/projects"
                >
                  <span className="text1">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/news">
                  <span className="text1">News</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/contact"
                >
                  <span className="text1">Contact Us</span>
                </a>
              </li>

              {admin && (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/dashboard"
                  >
                    <span className="text1">Dashboard</span>
                  </a>
                </li>
              )}

              {user?.displayName ? (
                <div className="d-flex">
                  <button
                    className="text1 h-50 w-50"
                    onClick={logout}
                    variant=""
                  >
                    Logout
                  </button>
                  <li className="nav-item">
                    <img
                      className="w-75 h-75 rounded-circle"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Profile Pic"
                      src={user?.photoURL}
                      alt="photo"
                    />
                  </li>
                </div>
              ) : (
                <div className="d-flex">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      aria-current="page"
                      href="/login"
                    >
                      <span className="text1">Login</span>
                    </a>
                  </li>
                  <br />
                  <li className="nav-item">
                    <img
                      className="w-50 h-25 rounded-circle"
                      src="https://i.ibb.co/FWQmPZr/pngtree-beautiful-admin-roles-line-vector-icon-png-image-5256998.jpg"
                      alt="photo"
                    />
                  </li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
