import React from "react";
import firebase from "../../../Config/fbconfig"
import SingleDoctor from "./SingleDoctor";

class HomeDoctorsList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      homedoctors:[]
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   // This will erase any local state updates!
  //   this.setState({homedoctors:nextProps.listItems})
  // }
  componentDidMount() {
        firebase
          .firestore() //access firestore
          .collection("users") //access "items" collection
          .where("status", "==", "Home")
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const homeItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({homedoctors:homeItems}) //items is equal to listItems
          });
  }

  render() {
    const { homedoctors } = this.state;
  
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex flex-row flex-wrap">
            
            {homedoctors && homedoctors.map((doctor)=>(
               <div key={doctor.fullname} className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-2">
              <SingleDoctor doctor={doctor}  />
               </div>
    ))}
          </div>
        </div>
      </div>
    );
  }
}



export default HomeDoctorsList
