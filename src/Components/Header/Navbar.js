import { React, useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../../Image/logo.png';
import LoadingBar from 'react-top-loading-bar';



function Navbar() {
  const [, SetShow] = useState("");
  const [progress, setProgress] = useState(0);
  let NavbarHandler = () => {
    let navbarSupportedContent = document.getElementById(
      "navbarNav"
    );
    SetShow(navbarSupportedContent.classList.remove("show"));
      setProgress(progress + 20);
    setTimeout(() => {
      setProgress(progress + 100);
    }, 1000);
  };
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <>   
         <LoadingBar
        color='#6c63ff'
        height={3.5}
       loaderSpeed={2000}
       waitingTime={3000}
        progress={progress}
        onLoaderFinished={() => setProgress}  
      />
    <nav class="navbar navbar-expand-lg background-color">
      <div class="container">
        <Link to='/' class="navbar-brand" href="#">
          {/* <img src={logo} alt="" /> */}
          <h2>DreamTeam</h2>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li class="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/about"
                className={`nav-link ${
                  location.pathname === "/about" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                Who We Are
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/services"
                className={`nav-link ${
                  location.pathname === "/services" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                What We Do
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/join"
                className={`nav-link ${
                  location.pathname === "/join" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                Join Us
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/blog"
                className={`nav-link ${
                  location.pathname === "/blog" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link
                to="/contact"
                className={`nav-link ${
                  location.pathname === "/contact" ? "active-navbar" : ""
                }`}
                onClick={NavbarHandler}
              >
                Get In Touch
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
