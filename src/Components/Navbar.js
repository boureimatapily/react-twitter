import React from "react";
import { connect } from "react-redux";
import SignedInNavbar from "./SignedInNavbar";
import SignedOutNavbar from "./SignedOutNavbar";

function Navbar({ uid }) {
  if(uid){
    return (
      <SignedInNavbar />
    );
  }else{
    return (
      <SignedOutNavbar />
    );
  }

  
}

const mStp = (state) => {
  // console.log(state)
  const uid = state.firebase.auth.uid;
  return {
    uid: uid,
  };
};
export default connect(mStp)(Navbar);
