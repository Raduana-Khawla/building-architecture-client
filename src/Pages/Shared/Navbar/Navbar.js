import React, { useContext } from "react";
import "./Navbar.css";
import { AuthContext } from "../../../contexts/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <React.Fragment>
      {user?.email ? (
        <div className="d-flex">
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              href="/dashboard"
            >
              <span className="text1">Dashboard</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link active"
              aria-current="page"
              onClick={handlelogout}
            >
              <span className="text1">
                <button onClick={handlelogout}>Sign out</button>
              </span>
            </a>
          </li>
        </div>
      ) : (
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/login">
            <span className="text1">Login</span>
          </a>
        </li>
      )}
    </React.Fragment>
  );
  return (
    <div>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
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
                  className="nav-link dropdown-toggle"
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
            </ul>
            <div className="navbar-center">
              <ul ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                {menuItems}
              </ul>
            </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
