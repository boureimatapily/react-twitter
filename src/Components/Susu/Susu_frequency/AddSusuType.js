import React from "react";
import { connect } from "react-redux";
import { addSusuType } from "../../../Redux/Actions/UserActions";

class AddSusuType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      dialyDate: "",
      otherType: "",
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
    const { type, dialyDate, otherType } = this.state;
    const {groupId}= this.props
    const newType = {
      type: type,
      dialyDate: dialyDate,
      otherType: otherType,
    };

    this.props.addSusuType(groupId, newType);
    this.setState({ type: "", dialyDate: "", otherType: "" });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col mb-2">
                  <label htmlFor="type" className="form-label mr-3">
                    Susu Type
                  </label>
                  <select
                    className="form-select form-select-lg mb-3 inputsStyle"
                    aria-label="Default select example"
                    name="type"
                    value={this.state.type}
                    onChange={this.handleChange}
                  >
                    <option defaultValue>Choose Your Susu Type</option>
                    <option value="Dialy Susu">Dialy Susu</option>
                    <option value="Weekly Susu"> Weekly Susu</option>
                    <option value="Monthly Susu"> Monthly Susu</option>
                    <option value="Quarterly Susu"> Quarterly Susu</option>
                    <option value="Quarterly Susu"> Other type</option>
                    <option value="Hospital"></option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="form-group col mb-2">
                  <label htmlFor="dialyDate" className="inputslabelStyle">
                    Choose your Susu Day (Only if Dialy Susu)
                  </label>
                  <input
                    value={this.state.dialyDate}
                    onChange={this.handleChange}
                    type="date"
                    id="dialyDate"
                    name="dialyDate"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col mb-2">
                  <label htmlFor="otherType" className="inputslabelStyle">
                    Add your Susu Name
                  </label>
                  <input
                    value={this.state.otherType}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Day1, Week1, April, .."
                    id="otherType"
                    name="otherType"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary my-3 navTabsBtn">
                ADD SUSU TYPE
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addSusuType })(AddSusuType);
