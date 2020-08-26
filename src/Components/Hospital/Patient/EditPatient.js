import React from "react";
import { connect } from "react-redux";
import {
  updatePatient,
  addDoctorNote,
  uploadfiles,
} from "../../../Redux/Actions/UserActions";
import { compose } from "redux";
// import { firestoreConnect } from "react-redux-firebase";
// import { Link } from "react-router-dom";
import "./patient.css";
import firebase from "../../../Config/fbconfig";
import Dropzone from "react-dropzone"; //Drop zone for image upload
//import { Link } from "react-router-dom";

class EditPatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folderId: "",
      firstname: "",
      lastname: "",
      age: "",
      doctorNote: "",
      doctorName: "",
      consultDate: "",
      consultLink: "",
      files: [],
      filesUrl: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDoctorSubmit = this.handleDoctorSubmit.bind(this);
    this.handleUploadFiles = this.handleUploadFiles.bind(this);
  }

  // componentDidMount() {
  //   this.setState({
  //     firstname: this.props.patient.firstname,
  //     lastname: this.props.patient.lastname,
  //     folderId: this.props.patient.folderId,
  //     age: this.props.patient.age,
  //     doctorNote: this.props.patient.doctorNote,
  //     doctorName: this.props.patient.doctorName,
  //     consultDate: this.props.patient.consultDate,
  //     consultLink: this.props.patient.consultLink,
  //   });
  // }
  componentDidMount() {
    // const doctorId = this.props.match.params.id;
    firebase
      .firestore() //access firestore
      .collection("patients") //access "items" collection
      // .where("authorId", "==", this.props.doctorid)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listEditPatient = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        const id = this.props.match.params.id;
        let listPatients = listEditPatient.find((item) => {
          return item.id === id;
        });

        this.setState({
          folderId: listPatients.folderId,
          firstname: listPatients.firstname,
          lastname: listPatients.lastname,
          age: listPatients.age,
          doctorNote: listPatients.doctorNote,
          doctorName: listPatients.doctorName,
          consultDate: listPatients.consultDate,
          consultLink: listPatients.consultLink,
        }); //items is equal to listItems
      });
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      firstname,
      lastname,
      age,
      folderId,
      doctorNote,
      doctorName,
      consultDate,
      consultLink,
    } = this.state;
    const newPatient = {
      folderId: folderId,
      firstname: firstname,
      lastname: lastname,
      age: age,
      doctorNote: doctorNote,
      doctorName: doctorName,
      consultDate: consultDate,
      consultLink: consultLink,
    };
    const patientId = this.props.match.params.id;
    this.props.updatePatient(patientId, newPatient);
  };

  handleDoctorSubmit = (e) => {
    e.preventDefault();
    const { doctorNote, doctorName } = this.state;
    const adddoctorNote = {
      doctorNote: doctorNote,
      doctorName: doctorName,
    };
    const patientId = this.props.match.params.id;
    this.props.addDoctorNote(patientId, adddoctorNote);
  };
  // uploads patient folder images
  handleUploadFiles = (e) => {
    e.preventDefault();
    const { folderId, files } = this.state;
    this.props.uploadfiles(folderId, files);
  };
  // dropzone claaback function
  onDrop = (files) => {
    this.setState({ files });
  };

  getAllImage = (e) => {
    const { folderId } = this.state;
    e.preventDefault();
    firebase
      .storage()
      .ref(folderId)
      .listAll()
      .then((snap) => {
        snap.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((imgUrl) => {
            console.log(imgUrl);
            this.setState({ filesUrl: imgUrl });
          });
        });
      });
  };

  render() {
    // const { profile } = this.props;
    const files = this.state.files.map((file) => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col">
                  {/* <Link
                    to={profile.role === "manager" ? "/hospital" : "/doctor"}
                  >
                    <button
                      type="submit"
                      className="btn btn-primary mt-3 navTabsBtnlogin"
                    >
                      Go Back
                    </button>
                  </Link> */}

                  <h2> Update Patient folder </h2>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="folderId">Patient Folder ID</label>
                  <input
                    value={this.state.folderId}
                    onChange={this.handleChange}
                    type="text"
                    id="folderId"
                    name="folderId"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="consultDate">Consulting Date</label>
                  <input
                    value={this.state.consultDate}
                    onChange={this.handleChange}
                    type="datetime-local"
                    id="consultDate"
                    name="consultDate"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="firstname">firstname</label>
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
                  <label htmlFor="lastname">lastname</label>
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
                  <label htmlFor="age">age</label>
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
              <div className="row">
                <div className="form-group col-md-4 mb-2">
                  <label htmlFor="consultLink">Consult Link</label>
                  <input
                    value={this.state.consultLink}
                    onChange={this.handleChange}
                    type="text"
                    id="consultLink"
                    name="consultLink"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary mt-3 navTabsBtnlogin  mb-2"
              >
                Update Infos
              </button>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col mb-2 inputsStyle">
            <Dropzone onDrop={this.onDrop}>
              {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
                <section className="container">
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()}/>
                    <h3 className="fileuploadinput text-center"> 
                       Click to select files
                    </h3>
                  </div>
                  <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                  </aside>
                </section>
              )}
            </Dropzone>
            <button
              type="submit"
              className="btn btn-primary mt-3 navTabsBtnlogin"
              onClick={this.handleUploadFiles}
            >
              Upload files
            </button>
          </div>
          <div className="col mb-2 inputsStyle">
            <div>
                <a href={this.state.filesUrl} target="_blank" rel="noopener noreferrer" >{this.state.filesUrl}</a>
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3 navTabsBtnlogin"
              onClick={this.getAllImage}
            >
              Get all Images
            </button>
            
          </div>
        </div>

        {/* <div className="row">
         
        </div> */}
        <div className="row">
          <form onSubmit={this.handleDoctorSubmit}>
            <div className="row">
              <div className="form-group col-md-4 mb-2">
                <label htmlFor="doctorName">Doctor Name</label>
                <input
                  value={this.state.doctorName}
                  onChange={this.handleChange}
                  type="text"
                  id="doctorName"
                  name="doctorName"
                  className="form-control inputsStyle"
                />
              </div>
              <div className="form-group col-md-6 mb-2">
                <textarea
                  className="form-control is-invalid inputsStyle doctorNoteInput "
                  id="validationTextarea"
                  placeholder="Doctor Note"
                  name="doctorNote"
                  value={this.state.doctorNote}
                  onChange={this.handleChange}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary mt-3 navTabsBtnlogin"
            >
              Add Doctor Note
            </button>
          </form>
        </div>
      </div>
    );
  }
}
// const mStp = (state, ownProps) => {
 
//   const profile = state.firebase.profile;
//   return {
   
//     profile: profile,
//   };
// };

export default compose(
  connect(null, { updatePatient, addDoctorNote, uploadfiles })
  // firestoreConnect((ownProps) => [
  //   // listen and get data form the patients collection
  //   {
  //     collection: "patients",
  //     // where : ["authorId", "==", ownProps.uid],
  //     orderBy: ["date", "desc"],
  //   },
  // ])
)(EditPatient);
