import React, { Component } from "react";
import firebase from "../../Config/fbconfig";
import { connect } from "react-redux";
import SusuItem  from "./SusuItem";

class SusuList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      susulist: [],
    };
  }
 
  componentDidMount() {
    const useruid = this.props.uid;
    firebase
      .firestore() //access firestore
      .collection("group") //access "items" collection
      .where("authorId", "==", useruid)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        this.setState({ susulist: listItems }); //items is equal to listItems
      });
  }
  render() {
    console.log(this.state);
    const { susulist } = this.state;

    return (
      <div className="container">
        <div className="row">
        <h1 className="mt-3">ALL Susu Group</h1>
          <div className="col d-flex flex-row flex-wrap">
            { susulist &&
               susulist.map(( susu) => (
                <div
                  key={susu.groupNmae}
                  className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-2"
                >
                  <SusuItem susu={susu} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}
const mStp = (state) => {
  console.log(state);
  const uid = state.firebase.auth.uid;
  // const profile = state.firebase.profile;
  return {
    uid: uid,
    //   profile: profile,
  };
};

export default connect(mStp)(SusuList);
