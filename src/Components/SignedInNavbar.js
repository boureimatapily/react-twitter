import React from "react";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/authActions";

function SignedInNavbar({logout}) {

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light NavColor">
              <div className="container-fluid">
                <div className="navbar-brand brandColor">
                Susu market
                </div>
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
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                    {/* <li className="nav-item whiteColor ">
                      <Link
                        className=" active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li> */}
                    {/* <li className="nav-item whiteColor">
                      <Link className="NavBtnLink" to="/doctor">
                        Doctor
                      </Link>
                    </li> */}
                    <li className="nav-item whiteColor ">
                      <Link to="/dashboard" className="NavBtnLink">
                        Dashboard
                      </Link>
                    </li>
                    {/* <li className="nav-item whiteColor ">
                      <Link to="/adminpatienttab" className="NavBtnLink">
                        Patient
                      </Link>
                    </li> */}
                    <li className="nav-item whiteColor ">
                      <Link to="/" className="NavBtnLink" onClick={logout}>
                        Log Out
                      </Link>
                    </li>
                    {/* <li className="nav-item whiteColor ">
                      <Link to="/login" className="NavBtnLink">
                        Login
                      </Link>
                    </li> */}
                    
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  
  }

  
export default connect(null, {logout })(SignedInNavbar);
