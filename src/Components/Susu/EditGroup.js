import React from "react";
import { connect } from "react-redux";
import firebase from "../../Config/fbconfig";
import { updateGroup } from "../../Redux/Actions/UserActions";


class EditGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupName: "",
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
    const groupId = this.props.match.params.id;
    this.props.updateGroup(groupId, this.state);
  };
  getGroup = () =>
    // const useruid = this.props.uid;
    firebase
      .firestore() //access firestore
      .collection("group") //access "items" collection
      // .where("authorId", "==", useruid)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        const id = this.props.match.params.id;
        let susus = listItems.find((item) => {
          return item.id === id;
        });
        this.setState({
          groupName: susus.groupName,
          
        }); //items is equal to listItems
      });

  componentDidMount() {
    this.getGroup();
  }

  render() {
    //const doctorid = this.props.match.params.id;
    // console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col">
          <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-md-6 mb-2">
                  <label htmlFor="groupName" className="inputslabelStyle">
                    Group Name
                  </label>
                  <input
                    value={this.state.groupName}
                    onChange={this.handleChange}
                    type="text"
                    id="groupName"
                    name="groupName"
                    className="form-control inputsStyle"
                  />
                </div>
                <div className="form-group col-md-4 mb-2">
                  <button
                    type="submit"
                    className="btn btn-primary my-3 navTabsBtn"
                  >
                    Update Groupe Name
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>ADD YOUR SUSU MEMBERS</h1>
            {/* <AddPatient doctorid={doctorid} /> */}
          </div>
        </div>
        <div className="row">
          <div className="col">
            {/* <PatientTab doctorid={doctorid} /> */}
            {/* <PatientList doctorid={doctorid} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { updateGroup })(EditGroup);
