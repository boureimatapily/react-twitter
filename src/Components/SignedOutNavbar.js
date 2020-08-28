import React from "react";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";


function SignedOutNavbar() {
  
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light NavColor">
              <div className="container-fluid">
                <Link className="navbar-brand brandColor" to="/">
                Susu market
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon iconColor"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                ></div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                  <li className="nav-item whiteColor ">
                      <Link to="/" className="NavBtnLink" >
                        Home
                      </Link>
                    </li>
                    
                    <li className="nav-item whiteColor ">
                      <Link to="/login" className="NavBtnLink">
                        Login
                      </Link>
                    </li>
                   
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  
}


export default SignedOutNavbar
