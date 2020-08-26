import React from "react";
import { connect } from "react-redux";
import firebase from "../../../Config/fbconfig";
import { updateDoctor } from "../../../Redux/Actions/UserActions";


class EditSingleDoctor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      status: "",
      department: "",
      speciality: "",
      userid:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const doctorId = this.props.match.params.id;
    this.props.updateDoctor(doctorId, this.state);
  };

  componentDidMount() {
    firebase
      .firestore() //access firestore
      .collection("users") //access "items" collection
      //   .where("status", "==", "Home")
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const singleDoctor = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        const id = this.props.match.params.id;
        let Edoctor = singleDoctor.find((item) => {
          return item.id === id;
        });

        this.setState({
          fullname: Edoctor.fullname,
          status: Edoctor.status,
          department: Edoctor.department,
          speciality: Edoctor.speciality,
          userid: Edoctor.userid
        }); //items is equal to listItems
      });
  }

  render() {
   
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={this.handleSubmit} id="form">
              <div className="row">
                <div className="mb-2">
                  <label htmlFor="fullname" className="form-label">
                    fullname
                  </label>
                  <input
                    type="text"
                    className="form-control inputsStyle"
                    id="fullnameinput"
                    name="fullname"
                    value={this.state.fullname}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="department">Department</label>
                  <input
                    value={this.state.department}
                    onChange={this.handleChange}
                    type="text"
                    id="departmentinput"
                    name="department"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-sm-12 col-xs-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-2">
                  <label htmlFor="speciality">speciality</label>
                  <input
                    value={this.state.speciality}
                    onChange={this.handleChange}
                    type="text"
                    id="specialityinput"
                    name="speciality"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row align-items-center">
                <div className="form-group col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-2">
                  <div className="form-group col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-2">
                    <label htmlFor="fullname" className="form-label mr-3">
                      Status
                    </label>
                    <select
                      className="form-select form-select-lg mb-3 inputsStyle inputSelectStyle"
                      aria-label="Default select example"
                      name="status"
                      value={this.state.status}
                      onChange={this.handleChange}
                    >
                      <option defaultValue>Choose Doctor Status</option>
                      <option value="Quanrantined">Quanrantined Doctor</option>
                      <option value="Home">Work from Home</option>
                      <option value="Hospital">Availbable(In Hospital)</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary navTabsBtneditdoctor"
                  >
                    UPDATE INFORMATION
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
  
      </div>
    );
  }
}

export default connect(null, { updateDoctor })(EditSingleDoctor);
