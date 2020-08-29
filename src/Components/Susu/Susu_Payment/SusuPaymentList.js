import React from "react";
import firebase from "../../../Config/fbconfig";
import { connect } from "react-redux";
import SingleSusuPayement from "./SingleSusuPayement";

class SusuPaymentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentList: [],
    };
  }
  getPaymentList=()=>{
    const {uid, groupId} = this.props
    firebase
      .firestore() //access firestore
      .collection("susupayment") //access "items" collection
      .where("authorId", "==", uid)
      .where("paymentId", "==", groupId)
      .where("sId", "==", groupId)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        this.setState({ paymentList: listItems }); //items is equal to listItems
      });
  }

  componentDidMount() {
    this.getPaymentList()
  }
  render() {
    const { paymentList} = this.state;


    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <table className="table table-striped">
              <thead>
                <tr>
                  {/* <th scope="col">Date</th> */}
                  {/* <th scope="col">Date</th> */}
                  <th scope="col">Fullname</th>
                  <th scope="col">Amount</th>
                 
                </tr>
              </thead>
              <tbody>
                {paymentList &&
                  paymentList.map((payment) => <SingleSusuPayement payment={payment}  />)}
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
  
  return {
    uid: uid,
  };
};

export default connect(mStp)(SusuPaymentList);
