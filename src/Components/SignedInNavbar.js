import React from "react";
import "./Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../Redux/Actions/authActions";
//import firebase from "../Config/fbconfig"

function SignedInNavbar({logout, uid, profile}) {
  if(profile.role === "manager"){
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light NavColor">
              <div className="container-fluid">
                <Link className="navbar-brand brandColor" to="/">
                  Covid Care
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
                >
                  <ul className="navbar-nav mr-auto mb-2 mb-lg-0 ">
                    <li className="nav-item whiteColor ">
                      <Link
                        className=" active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    {/* <li className="nav-item whiteColor">
                      <Link className="NavBtnLink" to="/doctor">
                        Doctor
                      </Link>
                    </li> */}
                    <li className="nav-item whiteColor ">
                      <Link to="/hospital" className="NavBtnLink">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item whiteColor ">
                      <Link to="/adminpatienttab" className="NavBtnLink">
                        Patient
                      </Link>
                    </li>
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
  }else{
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-lg navbar-light NavColor">
              <div className="container-fluid">
                <Link className="navbar-brand brandColor" to="/">
                  Covid Care
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
                    <li className="nav-item whiteColor">
                      <Link className="NavBtnLink" to="/doctor">
                        Dashboard
                      </Link>
                    </li>
                    {/* <li className="nav-item whiteColor ">
                      <Link to="/hospital" className="active NavBtnLink">
                        Hospital
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

  
}

const mStp = (state) => {
  // console.log(state)
  const uid = state.firebase.auth.uid;
  const profile = state.firebase.profile;
  return {
    uid: uid,
    profile: profile
  };
};
export default connect(mStp, {logout })(SignedInNavbar);
