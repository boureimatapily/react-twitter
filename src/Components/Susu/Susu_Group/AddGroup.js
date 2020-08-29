import React from "react";
import { connect } from "react-redux";
import {addGroup } from "../../../Redux/Actions/UserActions";

class AddGroup extends React.Component {
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
    const { groupName } = this.state;
    const newPatient = {
      groupName: groupName,
    };

    this.props.addGroup (newPatient);
    this.setState({ groupName: "", });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
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
                    ADD Susu Group
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

export default connect(null, { addGroup  })(AddGroup);
