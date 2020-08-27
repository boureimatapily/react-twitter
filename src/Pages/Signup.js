import React from "react";
import { connect } from "react-redux";
import { register } from "../Redux/Actions/authActions";
//import { addUser } from "../../Redux/Actions/UserActions";



class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fullname: "",
      address:""
      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
   
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
    // document.getElementById("form").reset();
    this.setState({
      email: "",
      password: "",
      fullname: "",
      address: "",
      
    })
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
            <form onSubmit={this.handleSubmit} id="form">
              <div className="row text-left">
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control inputsStyle"
                    id="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="password" className="form-label">
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
              </div>

              <div className="row text-left">
                <div className="mb-2">
                  <label htmlFor="fullname" className="form-label">
                    fullname
                  </label>
                  <input
                    type="text"
                    className="form-control inputsStyle"
                    id="fullname"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="department">Address</label>
                  <input
                    value={this.state.address}
                    onChange={this.handleChange}
                    type="text"
                    id="address"
                    name="address"
                    className="form-control inputsStyle"
                  />
                </div>
               
              </div>
              <div className="row align-items-center">
                <div className="form-group col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-12 col-xxl-12 mb-2 text-center">
                  <button type="submit" className="btn btn-primary navTabsBtn homeBtn ">
                   Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { register })(AddUser);
