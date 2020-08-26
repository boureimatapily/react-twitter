import React from "react";
import { connect } from "react-redux";
import { addPatient } from "../../../Redux/Actions/UserActions";

class AddPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: "",
      firstname: "",
      lastname: "",
      age: "",
      file: null,
      doctorNote: "Add doctor Note",
      doctorName: " Add Doctor Name",
      checked: "",
      consultDate: "",
      consultLink:"Add consult Link",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      age,
      folderId,
      checked,
      doctorName,
      doctorNote,
      consultDate,
      consultLink,
    } = this.state;
    const newPatient = {
      folderId: folderId,
      firstname: firstname,
      lastname: lastname,
      age: age,
      checked: checked,
      doctorName: doctorName,
      doctorNote: doctorNote,
      consultDate: consultDate,
      consultLink: consultLink,
    };

    this.props.addPatient(this.props.doctorid, newPatient);
    this.setState({ folderId: "", firstname: "", lastname: "", age: "" });
  };
  render() {
    
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="folderId" className="inputslabelStyle">
                    Patient Folder ID
                  </label>
                  <input
                    value={this.state.folderId}
                    onChange={this.handleChange}
                    type="text"
                    id="folderId"
                    name="folderId"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="firstname" className="inputslabelStyle">
                    firstname
                  </label>
                  <input
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    type="text"
                    id="firstname"
                    name="firstname"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="lastname" className="inputslabelStyle">
                    lastname
                  </label>
                  <input
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    type="text"
                    id="lastname"
                    name="lastname"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="age" className="inputslabelStyle">
                    age
                  </label>
                  <input
                    value={this.state.age}
                    onChange={this.handleChange}
                    type="text"
                    id="age"
                    name="age"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              {/* <div className="row">
                <div className="form-file col-md-4 p-20 ">
                  <input
                    type="file"
                    value={this.state.file}
                    onChange={this.handleChange}
                    name="file"
                    className="form-file-input"
                    id="customFile"
                  />
                  <label className="form-file-label" for="customFile">
                    <span className="form-file-text">Choose file...</span>
                    <span className="form-file-button">Browse</span>
                  </label>
                </div>
              </div> */}

              <button type="submit" className="btn btn-primary my-3 navTabsBtn">
                ADD Patient
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addPatient })(AddPatient);
