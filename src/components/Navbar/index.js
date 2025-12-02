import React from "react";
import "./index.css";
import bell from "../../assets/notofication_icon.png"; // example icons
import logo from "../../assets/rubicr_logo.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      {/* Left: Logo */}
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
      </div>

      {/* Center: Navigation List */}
      <ul className="navbar-list">
        <li className="nav-item">SKU</li>
        <li className="nav-item">Vendor</li>
        <li className="nav-item">Questionnaire</li>
        <li className="nav-item">Ratings</li>
        <li className="nav-item">Users</li>
      </ul>

      {/* Right: Notification + Profile */}
      <div className="navbar-right">
        <div className="notification-wrapper">
          <div className="notification-box">
            <img src={bell} alt="notification" className="notification-icon" />
          </div>
        </div>

        <div className="profile-box">
          S
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
