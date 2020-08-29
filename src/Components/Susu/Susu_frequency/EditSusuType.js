import React from "react";
import { connect } from "react-redux";
import AddPayment from "../Susu_Payment/AddPayment";
import SusuPaymentList from "../Susu_Payment/SusuPaymentList";

class EditSusuType extends React.Component {

  
  render() {
    const groupId = this.props.match.params.id;
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <AddPayment  groupId={groupId} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <SusuPaymentList groupId={groupId} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null)(EditSusuType);
