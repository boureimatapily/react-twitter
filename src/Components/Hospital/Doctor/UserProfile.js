import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { addDays, addDaysUpdate } from "../../../Redux/Actions/UserActions";
import "./Doctor.css";
import pencil from "../../../Images/icons/pencil.svg";

class UserProfile extends React.Component {
  render() {
    const { uid, profile } = this.props;
    if (!uid) return <Redirect to="/login" />;

    return (
      <div className="container">
        <div className="row">
          <div>
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
              <h5>Adress: {profile.address} </h5>
              
            </div>
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

export default connect(mStp, { addDays, addDaysUpdate })(UserProfile);
