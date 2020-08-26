import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { addDays, addDaysUpdate } from "../../../Redux/Actions/UserActions";
import Alldays from "./Alldays";
import "./Doctor.css";
import pencil from "../../../Images/icons/pencil.svg";


class DoctorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mondayopen: "",
      mondayclose: "",
      tuesdayopen: "",
      tuesdayclose: "",
      wednesdayopen: "",
      wednesdayclose: "",
      thursdayopen: "",
      thursdayclose: "",
      fridayopen: "",
      fridayclose: "",
      saturdayopen: "",
      saturdayclose: "",
      sundayopen: "",
      sundayclose: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({
      mondayopen: this.props.profile.mondayopen,
      mondayclose: this.props.profile.mondayclose,
      tuesdayopen: this.props.profile.tuesdayopen,
      tuesdayclose: this.props.profile.tuesdayclose,
      wednesdayopen: this.props.profile.wednesdayopen,
      wednesdayclose: this.props.profile.wednesdayclose,
      thursdayopen: this.props.profile.thursdayopen,
      thursdayclose: this.props.profile.thursdayclose,
      fridayopen: this.props.profile.fridayopen,
      fridayclose: this.props.profile.fridayclose,
      saturdayopen: this.props.profile.saturdayopen,
      saturdayclose: this.props.profile.saturdayclose,
      sundayopen: this.props.profile.sundayopen,
      sundayclose: this.props.profile.sundayclose,
    });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDays(this.state);
  };
  handleUpdate = (e) => {
    e.preventDefault();
    const alldata = {
      mondayopen: this.state.mondayopen,
      mondayclose: this.state.mondayclose,
      tuesdayopen: this.state.tuesdayopen,
      tuesdayclose: this.state.tuesdayclose,
      wednesdayopen: this.state.wednesdayopen,
      wednesdayclose: this.state.wednesdayclose,
      thursdayopen: this.state.thursdayopen,
      thursdayclose: this.state.thursdayclose,
      fridayopen: this.state.fridayopen,
      fridayclose: this.state.fridayclose,
      saturdayopen: this.state.saturdayopen,
      saturdayclose: this.state.saturdayclose,
      sundayopen: this.state.sundayopen,
      sundayclose: this.state.sundayclose,
    };
    this.props.addDaysUpdate(alldata);
    this.setState({
      mondayopen: "",
      mondayclose: "",
      tuesdayopen: "",
      tuesdayclose: "",
      wednesdayopen: "",
      wednesdayclose: "",
      thursdayopen: "",
      thursdayclose: "",
      fridayopen: "",
      fridayclose: "",
      saturdayopen: "",
      saturdayclose: "",
      sundayopen: "",
      sundayclose: "",
    });
  };

  render() {
    const { uid, profile } = this.props;
    if (!uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <h3 className="text-center"> Profile Information</h3>
            <div className="doctorActionButton">
            
              <Link to={"editsingledoctor/" + uid}> 
              <button type="button" className="btn btn-secondary btnaction">
                <img
                  src={pencil}
                  alt="pencil"
                  id="pencil"
                  width="20"
                  height="20"
                  title="delete"
                />
              </button>
              </Link>
            </div>

            <div className="card">
              <h5>Email: {profile.email} </h5>
              <h5>Fullname: {profile.fullname} </h5>
              <h5>Role: {profile.role} </h5>
              <h5>Status: {profile.status} </h5>
              <h5>Department {profile.department} </h5>
              <h5>speciality: {profile.speciality} </h5>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Alldays day={profile} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="text-center"> Availability </h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/* Monday */}
                  <label htmlFor="monday" className="col-form-label">
                    <h6> Monday</h6>
                  </label>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimemondayopen"
                      name="mondayopen"
                      value={this.state.mondayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="monday"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimemondayclose"
                      name="mondayclose"
                      value={this.state.mondayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="monday"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 ">
                  {/* Tuesday */}
                  <div className="col-auto">
                    <label htmlFor="tuesday" className="col-form-label">
                      <h6> tuesday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimetuesdayopen"
                      name="tuesdayopen"
                      value={this.state.tuesdayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="tuesday"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimetuesdayclose"
                      name="tuesdayclose"
                      value={this.state.tuesdayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="tuesday"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/* Wednesday */}
                  <div className="col-auto">
                    <label htmlFor="wednesday" className="col-form-label">
                      <h6> wednesday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimewednesdayopen"
                      name="wednesdayopen"
                      value={this.state.wednesdayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="wednesday"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimewednesdayclose"
                      name="wednesdayclose"
                      value={this.state.wednesdayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="wednesday"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/* thursday */}
                  <div className="col-auto">
                    <label htmlFor="thursday" className="col-form-label">
                      <h6> thursday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimethursdayopen"
                      name="thursdayopen"
                      value={this.state.thursdayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="thursday "
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimethursdayclose"
                      name="thursdayclose"
                      value={this.state.thursdayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="thursday "
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/* Friday */}
                  <div className="col-auto">
                    <label htmlFor="firday" className="col-form-label">
                      <h6> firday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimefridayopen"
                      name="fridayopen"
                      value={this.state.fridayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="firday"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimefridayclose"
                      name="fridayclose"
                      value={this.state.fridayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="firday"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/*Saturday */}
                  <div className="col-auto">
                    <label htmlFor="saturday" className="col-form-label">
                      <h6> saturday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimesaturdayopen"
                      name="saturdayopen"
                      value={this.state.saturdayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="saturday"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimesaturdayclose"
                      name="saturdayclose"
                      value={this.state.saturdayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="saturday"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  {/* Sunday*/}
                  <div className="col-auto">
                    <label htmlFor="thursday" className="col-form-label">
                      <h6> sunday</h6>
                    </label>
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimesundayopen"
                      name="sundayopen"
                      value={this.state.sundayopen}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="sunday inputsStyle"
                    />
                  </div>
                  <div className="col-auto">
                    <input
                      type="text"
                      id="alldaystimesundayclose"
                      name="sundayclose"
                      value={this.state.sundayclose}
                      onChange={this.handleChange}
                      className="form-control inputsStyle"
                      aria-describedby="sunday inputsStyle"
                    />
                  </div>
                </div>
                <div className="form-group mb-2 col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                  <button type="submit" className="btn btn-primary navTabsBtn">
                    Set times
                  </button>
                  {/* <button
                type="submit"
                className="btn btn-primary alldaystimebtn"
                onClick={this.handleUpdate}
              >
                Update times
              </button> */}
                </div>
              </div>
            </form>
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
    profile: profile,
  };
};

export default connect(mStp, { addDays, addDaysUpdate })(DoctorProfile);
