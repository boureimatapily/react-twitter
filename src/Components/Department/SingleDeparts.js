import React from "react";

export default function SingleDeparts({ depart }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              <h5 className="card-title">Login here ....</h5>
              <p className="card-text">
                {" "}
                <h1> {depart.department} </h1>{" "}
              </p>
              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
