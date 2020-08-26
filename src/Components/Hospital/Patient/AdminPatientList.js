import React from "react";
import AdminTabSinglePatient from "./AdminTabSinglePatient";
import firebase from "../../../Config/fbconfig"


class AdminPatientList extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      checked:[]
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   // This will erase any local state updates!
  //   this.setState({checked:nextProps.listItems})
  // }
 
  componentDidMount() {
    // const doctorId = this.props.match.params.id;
    // const {doctorid} = this.props
        firebase
          .firestore() //access firestore
          .collection("patients") //access "items" collection
          // .where("authorId", "==", doctorid)
          // .where("dId", "==", userid)
          .onSnapshot(snapshot => {
            //You can "listen" to a document with the onSnapshot() method.
            const listItems = snapshot.docs.map(doc => ({
              //map each document into snapshot
              id: doc.id, //id and data pushed into items array
              ...doc.data() //spread operator merges data to id.
            }));
            this.setState({checked:listItems}) //items is equal to listItems
          });
  }

  render() {
    const { checked } = this.state;
  
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Patient List </h1>
            <table className="table table-striped">
              <thead>
                <tr>
                 {/* <th scope="col">Date</th> */}
                  <th scope="col">FolderId</th>
                  <th scope="col">Firstname</th>
                  <th scope="col">Lastname</th>
                  <th scope="col">age</th>
                  <th scope="col">Doctor</th>
                  <th scope="col">Consult Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {checked  &&
                  checked.map((patient) => (
                 
                    <AdminTabSinglePatient patient={patient} key={patient.folderId} />
                    
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}



export default AdminPatientList
