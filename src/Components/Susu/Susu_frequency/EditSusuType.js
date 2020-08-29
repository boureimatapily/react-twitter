import React from "react";
import { connect } from "react-redux";
import { addSusuTypePayment } from "../../../Redux/Actions/UserActions";

class EditSusuType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      amount: "",
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
    const { fullname, amount } = this.state;
    const groupId = this.props.match.params.id;
    const newSusuType = {
      fullname: fullname,
      amount: amount,
    };

    this.props.addSusuTypePayment(groupId, newSusuType);
    this.setState({ fullname: "", amount: "", otherType: "" });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col card">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col mb-2">
                  <label htmlFor="fullname" className="inputslabelStyle">
                    Members Fullname
                  </label>
                  <input
                    value={this.state.fullname}
                    onChange={this.handleChange}
                    type="text"
                    id="fullname"
                    placeholder="fullname"
                    name="fullname"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col mb-2">
                  <label htmlFor="amount" className="inputslabelStyle">
                    Amount
                  </label>
                  <input
                    value={this.state.amount}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="payed amount"
                    id="amount"
                    name="amount"
                    className="form-control inputsStyle"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary my-3 navTabsBtn">
                ADD PAYMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addSusuTypePayment })(EditSusuType);
