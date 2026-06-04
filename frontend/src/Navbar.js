import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  shadow-sm sticky-top" style={{backgroundColor : "#fff"}}>
      <div class="container">
        <Link class="navbar-brand" to="/">
          <img
            src="/media/images/logo.svg"
            style={{ width: "20%" }}
            alt="logo"
          />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2   mb-lg-0 p-1">
            <li class="nav-item">
              <Link  class="nav-link"  to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link  class="nav-link" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/support">
                Support
              </Link>
              </li>
              {/* <li class="fs-5 mt-2">
               <i className="fa-solid fa-bars"></i>
            </li> */}
           </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
