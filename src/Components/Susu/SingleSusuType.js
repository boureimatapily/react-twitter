import React from "react";
// import moment from "moment";
import trash from "../../Images/icons/trash-fill.svg";
import pencil from "../../Images/icons/pencil.svg";
import "../Hospital/Patient/patient.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSusuType } from "../../Redux/Actions/UserActions";

function SingleSusuType({ susut, deleteSusuType }) {
  const handleRemove = (susut) => {
    delete deleteSusuType(susut);
  };

  return (
    <>
      <tr>
        {/* <th> {moment(patient.date).calendar()} </th> */}
        <th> {susut.type}</th>
        <th> {susut.otherType}</th>
        <th> {susut.dialyDate}</th>
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
              onClick={() => handleRemove(susut)}
            />{" "}
          </button>
          <Link to={"/singlesusu/" + susut.id}>
            <button type="button" className="btn btn-secondary btnaction">
              <img
                src={pencil}
                alt="pencil"
                id="pencil"
                width="20"
                height="20"
                title="delete"
              />ADD PAYMENT
            </button>
          </Link>
        </th>
      </tr>
    </>
  );
}
export default connect(null, { deleteSusuType })(SingleSusuType);
