import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import UserProfile from "../Components/Hospital/Doctor/UserProfile";
import Susu from "../Components/Susu/Susu";

function Dashboard({ uid }) {
  if (!uid) return <Redirect to="/login" />;
  return (
    <div className="container">
      <div className="row">
        
          <div className="col-sm-12 col-xs-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3 mt-3">
            <div className="nav flex-column nav-pills mt-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <a className="nav-link active navTabsBtnlogin userdahnav mt-3" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Susu</a>
              <a className="nav-link navTabsBtnlogin userdahnav" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
            </div>
          </div>
          <div className="col-sm-12 col-xs-12 col-md-9 col-lg-9 col-xl-9 col-xxl-9 mt-3">
            <div className="tab-content" id="v-pills-tabContent ">
              <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab"><Susu/></div>
              <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab"> <UserProfile/> </div>
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

export default connect(mStp)(Dashboard);
