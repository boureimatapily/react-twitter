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
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <div className=" text-center sectionOne">
              <h2 className="font-weight-bolder display-5">
                WELCOME TO YOUR EVERYDAY SUSU APP
              </h2>
              <span className="font-weight-bold">
                Create an account, Add your susu menber and Save
              </span>
            </div>
            <div>
              <button
                type="submit"
                className="btn btn-primary navTabsBtnlogin text-center"
              >
                Sign up 
              </button>
              <button
                type="submit"
                className="btn btn-primary navTabsBtnlogin text-center"
              >
                Login
              </button>
            </div>
          </div>
          <div className="col d-flex flex-row justify-content-evenly align-items-center ">
            <img
              src={require("../Images/saving.png")}
              alt="covid"
              id="covid_imgOne"
              className="d-none d-md-block"
            />
          </div>
        </div>
        <div className="row sectionTwo">
          <div className="col-sm-12 col-md-6col-lg-6col-xl-6col-xxl-6col-xxl-6d-flex flex-row justify-content-center align-items-center">
            <div className="card cardstyle d-flex flex-column justify-content-center align-items-center">
              <img
                src={require("../Images/hospital.jpg")}
                className="card-img-top hospital"
                alt="hospital_img"
              />
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 className="card-title">JOIN US FOR FREE</h5>
                <p className="card-text">Enjoy Susu</p>
                <Link to="/hospital" className="getStartLink">
                  <button type="button" className="getStartBtn">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6col-lg-6col-xl-6col-xxl-6col-xxl-6d-flex flex-row justify-content-center align-items-center"></div>
        </div>
      </div>
    );
  }
}
// const mStp = (state) => {
//   const uid = state.firebase.auth.uid;
//   // const profile = state.firebase.profile;
//   return {
//     uid: uid,
//     // profile: profile,
//   };
// };

export default connect(null)(Home);
