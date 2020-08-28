import React from "react";
import firebase from "../../Config/fbconfig";
import { connect } from "react-redux";
import SingleSusuType from "./SingleSusuType";

class SusuTypeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      susuTList: [],
    };
  }
  getSusuType= () =>{
    const { uid, groupId } = this.props;
    firebase
      .firestore() //access firestore
      .collection("susutype") //access "items" collection
      .where("authorId", "==", uid)
      .where("typeId", "==", groupId)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        this.setState({ susuTList: listItems }); //items is equal to listItems
      });
  }
  componentDidMount() {
  this.getSusuType()
  }
  render() {
    const { susuTList } = this.state;
    console.log(this.state)

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  {/* <th scope="col">Date</th> */}
                  <th scope="col">Type</th>
                  <th scope="col">Name</th>
                  <th scope="col">Dialy Susu</th>
                </tr>
              </thead>
              <tbody>
                {susuTList &&
                  susuTList.map((susut) => <SingleSusuType susut={susut} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mStp = (state) => {
  const uid = state.firebase.auth.uid;
  // const profile = state.firebase.profile;
  return {
    uid: uid,
    //   profile: profile,
  };
};

export default connect(mStp)(SusuTypeList);
