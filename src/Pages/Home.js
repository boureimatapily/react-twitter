import React, { Component } from "react";
//import home css style file
import "../Components/Home/Home.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Signup from "./Signup";

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
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
            <img
              src={require("../Images/saving.png")}
              alt="covid"
              id="covid_imgOne"
              className="d-none d-md-block"
            />
            <Signup />
          </div>
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
