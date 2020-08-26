import React from "react";
import { connect } from "react-redux"
import { login } from "../Redux/Actions/authActions";
import { Redirect } from "react-router-dom";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const creds = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(creds);

  };
  render() {
    const { uid} = this.props;
    if (uid){
      return <Redirect to="/" />
    };
    return (
      <div className="container">
         <div className="row sectionOne">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 text-center">
              <h2>Fight COVID-19 With Codetrain and Covid Care Platform</h2>
              <span>Work from home, do everything remotly</span>
            </div>
            <div className="col d-flex flex-row justify-content-evenly align-items-center ">
              <img
                src={require("../Images/phone.JPG")}
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
        <div className="row">
        <div className="col justify-content-center align-items-center">
            <h1 className="text-center"> Login Page</h1>
            <form onSubmit={this.handleSubmit} id="form">
              <div className="mb-3">
                <label htmlFor="email" className="form-label inputslabelStyle">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control inputsStyle"
                  id="email"
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
                  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label inputslabelStyle">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control inputsStyle"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary navTabsBtnlogin text-center">
                Login
              </button>
            </form>
            <h4>Admin email: admin@admin.com</h4>
            <h4>Admin password: doctor@123*</h4>
            <h4>Doctor email: awal@doctor.com</h4>
            <h4>Doctor password: doctor@123*</h4>
          </div>
        </div>
      </div>
    );
  }
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  const profile = state.firebase.profile;
  return {
    uid: uid,
    profile: profile
  };
};

export default connect(mStp,{login})(Login);
