import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    // const { uid} = this.props;
    // if (!uid) return <Redirect to="/login" />;

      return (
        <div className="container appContainer">
          <div className="row sectionOne">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
              <h2>Welcome to your Susu APP</h2>
              <span>Create an account, add your susu menber and save</span>
            </div>
            <div className="col d-flex flex-row justify-content-evenly align-items-center ">
              <img
                src={require("../Images/saving.svg")}
                alt="covid"
                id="covid_imgOne"
                className="d-none d-md-block"
              />

              <img
                src={require("../Images/phone.JPG")}
                alt="covid"
                id="covid_img"
                className="d-none d-md-block"
              />
            </div>
          </div>
          <div className="row sectionTwo">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 col-xxl-12 d-flex flex-row justify-content-center align-items-center">
              <div className="card cardstyle d-flex flex-column justify-content-center align-items-center">
                <img
                  src={require("../Images/hospital.jpg")}
                  className="card-img-top hospital"
                  alt="hospital_img"
                />
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 className="card-title">Hospital Manager</h5>
                  <p className="card-text">Hoaspital Manager Dashboard</p>
                  <Link to="/hospital" className="getStartLink">
                    <button type="button" className="getStartBtn">
                      Get Start
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      );
  
}}
// const mStp = (state) => {
//   const uid = state.firebase.auth.uid;
//   // const profile = state.firebase.profile;
//   return {
//     uid: uid,
//     // profile: profile,
//   };
// };

export default connect(null)(Home);
