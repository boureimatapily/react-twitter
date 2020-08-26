import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import DoctorProfile from "../Components/Hospital/Doctor/DoctorProfile";
import DoctorPatient from "../Components/Hospital/Doctor/DoctorPatient";
import DoctorCheckedPatientList from "../Components/Hospital/Doctor/DoctorCheckedPatientList";

function Doctor({ uid }) {
  if (!uid) return <Redirect to="/login" />;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Doctor Dashboard</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <nav>
            <div
              className="nav nav-tabs navTabsContainer"
              id="nav-tab"
              role="tablist"
            >
              <a
                className="nav-link active navTabsLink flex-fill"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Profile
              </a>
              <a
                className="nav-link navTabsLink flex-fill"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Patient List
              </a>
              <a
                className="nav-link navTabsLink flex-fill"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Checked Patient
              </a>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {/* Tab to manage Patient adding and listing */}
              <h3 className="text-center">Profile</h3>
              <DoctorProfile />
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              {/* <Department/> */}
              <h3 className="text-center">Patient List</h3>
              <DoctorPatient />
            </div>

            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              {/* <Department/> */}
              <h3 className="text-center">Checked Patient List</h3>
              <DoctorCheckedPatientList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  // const profile = state.firebase.profile;
  return {
    uid: uid,
    //profile: profile
  };
};

export default connect(mStp)(Doctor);
