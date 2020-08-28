import React from "react";
import trash from "../../Images/icons/trash-fill.svg";
import pencil from "../../Images/icons/pencil.svg";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteGroup } from "../../Redux/Actions/UserActions";


 const SusuItem = ({ susu, deleteGroup }) => {
  const handleRemove = (susu) => {
    deleteGroup(susu);
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
                  onClick={() => handleRemove(susu)}
                />{" "}
              </button>
              <Link to={"/editgroup/" + susu.id}>
              <button type="button" className="btn btn-secondary btnaction">
                <img
                  src={pencil}
                  alt="pencil"
                  id="pencil"
                  width="20"
                  height="20"
                  title="delete"
                />{" "}
                Add Members
              </button>
              </Link>
            </div>
            <div className="card-body">
              <h6 className="card-title">Groupe Name </h6>
              <h4 className="card-subtitle mb-2 text-muted">
                {" "}
                {susu.groupName}{" "}
              </h4>
              <div className="card-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default connect(null,{deleteGroup})(SusuItem)
