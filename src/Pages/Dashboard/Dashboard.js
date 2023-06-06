import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div className="dashboard-container">
        <div className="row">
          <div className="col-md-3 py-5">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <li className="dashboard-menu">Orders list User</li>
              <Link to="#">
                <li className="dashboard-menu mt-5">Book</li>
              </Link>

              <Link to="#">
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link>

              <Link to="#">
                <li className="dashboard-menu mt-5">Pay</li>
              </Link>

              <Link to="#">
                <li className="dashboard-menu mt-5">Review</li>
              </Link>

              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list Admin</li>

                <Link to="#">
                  <li className="dashboard-menu">Add Service</li>
                </Link>
                <Link to="#">
                  <li className="dashboard-menu">Manage All Orders</li>
                </Link>

                <Link to="#">
                  <li className="dashboard-menu">Make Admin</li>
                </Link>

                <Link to="#">
                  <li className="dashboard-menu">Manage Products</li>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-9"></div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
