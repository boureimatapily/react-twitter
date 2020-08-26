import React from "react";
import moment from "moment";
import trash from "../../../Images/icons/trash-fill.svg";
import pencil from "../../../Images/icons/pencil.svg";
import "./patient.css";
import {
  deletePatient,
  toggleChecked,
} from "../../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AdminSinglePatient extends React.Component {
  constructor(props){
    super(props)
    this.state={
        file:null
    }
    // this.fileChangedHandler = this.fileChangedHandler.bind(this)
    // this.uploadHandler = this.uploadHandler.bind(this)
  }
   handleRemove = (patient) => {

    this.props.deletePatient(patient);
  };
   handleChecked = (patient) => {
    this.props.toggleChecked(patient);
  };
//  fileChangedHandler = event => {
//   event.preventDefault()
//     this.setState({ file: event.target.files[0] })
//   }
  
//   uploadHandler = () => {
//     console.log(this.state.file)
//   }

render(){
  const { patient } = this.props

  return (
    <>
      <tr>
        {/* <th> {moment(patient.date.toDate()).calendar()} </th> */}
        <th>{patient.folderId}</th>
        <th>{patient.firstname}</th>
        <th>{patient.lastname}</th>
        <th>{patient.age}</th>
        <th>{patient.doctorName}</th>
        <th>{patient.consultDate}</th>
        <th>
          <button type="button" className="btn btn-danger btnaction">
            {" "}
            <img
              src={trash}
              alt="trash"
              id="trash"
              width="20"
              height="20"
              title="delete"
              onClick={() => this.handleRemove(patient)}
            />{" "}
          </button>
          <Link to={"/edit/" + patient.id}> 
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
          <input
            className="form-check-input pcheckbox"
            type="checkbox"
            value={patient.checked}
            defaultChecked={patient.checked}
            id="checkbox"
            onClick={() => this.handleChecked(patient)}
          />
            {/* <div>
                <div className="form-file col-md-4 p-10 ">
                  <input
                    type="file"
                    value={this.state.file}
                    onChange={this.fileChangedHandler}
                    name="file"
                    className="form-file-input"
                    id="customFile"
                  />
                  <label className="form-file-label" for="customFile">
                    <span className="form-file-text">Choose file...</span>
                    <span className="form-file-button">Browse</span>
                  </label>
                </div>
                <button onClick={this.uploadHandler}>Upload!</button>
              </div> */}
        </th>
      </tr>
    </>
  );
}}
export default connect(null, { deletePatient, toggleChecked })(AdminSinglePatient);
