import React from "react";
// import moment from "moment";
import trash from "../../../Images/icons/trash-fill.svg";
import pencil from "../../../Images/icons/pencil.svg";
import "./patient.css";
import {
  deletePatient,
  toggleChecked,
} from "../../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SinglePatient({ patient, deletePatient, toggleChecked }) {
  const handleRemove = (patient) => {
    deletePatient(patient);
  };
  const handleChecked = (patient) => {
    toggleChecked(patient);
  };

  return (
    <>
      <tr>
        {/* <th> {moment(patient.date).calendar()} </th> */}
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
              onClick={() => handleRemove(patient)}
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
            onClick={() => handleChecked(patient)}
          />
        </th>
      </tr>
    </>
  );
}
export default connect(null, { deletePatient, toggleChecked })(SinglePatient);
