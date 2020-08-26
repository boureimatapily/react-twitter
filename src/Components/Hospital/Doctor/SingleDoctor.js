import React from "react";
import Alldays from "./Alldays";
import "./Doctor.css";
import pencil from "../../../Images/icons/pencil.svg";
import trash from "../../../Images/icons/trash-fill.svg";
import { deleteDoctor } from "../../../Redux/Actions/UserActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function SingleDoctor({ doctor, deleteDoctor }) {
  const handleRemove = (doctor) => {
    deleteDoctor(doctor);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card cardSize text-center">
            <div className="doctorActionButton">
              <button type="button" className="btn btn-danger btnaction">
                {" "}
                <img
                  src={trash}
                  alt="trash"
                  id="trash"
                  width="20"
                  height="20"
                  title="delete"
                  onClick={() => handleRemove(doctor)}
                />{" "}
              </button>
              <Link to={"/editdoctor/" + doctor.id}>
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
            </div>
            <div className="card-body">
              <h6 className="card-title">Fullname: {doctor.fullname} </h6>
              <h4 className="card-subtitle mb-2 text-muted">
                {" "}
                Status: {doctor.status}{" "}
              </h4>
              <div className="card-text">
                <h6>Email: {doctor.email}</h6>
                <h6>Department: {doctor.department}</h6>
                <h6>Role: {doctor.role}</h6>
                <h6>Speciality: {doctor.speciality}</h6>
              </div>
              <div className="mb-2">
                <Alldays day={doctor} />
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-6">
         
        </div> */}
      </div>
    </div>
  );
}
export default connect(null, { deleteDoctor })(SingleDoctor);
