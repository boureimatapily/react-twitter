import React from "react";
import Joi from "joi-browser";
import Form from "../../common/form";

class PatientForm extends Form {
  state = {
    data: {
      fullname: "",
      age: "",
      temperature: "",
      height: "",
      weight: "",
      nextofkin: "",
      contact: "",
      status: "",
      report: "",
    },
    errors: {},
  };

  schema = {
    fullname: Joi.string().required().label("Fullname"),
    age: Joi.string().required().label("Age"),
    temperature: Joi.string().required().label("Temperature"),
    height: Joi.string().required().label("Height"),
    weight: Joi.string().required().label("Weight"),
    nextofkin: Joi.string().required().label("Next of kin"),
    contact: Joi.string().required().label("Contact"),
    status: Joi.string().required().label("Patients status"),
    report: Joi.string().required().label("Doctors Report"),
  };

  doSubmit = () => {
    // call the server
    console.log("submitted");
  };

  render() {
    const { data, errors } = this.state;
    console.log(data);
    return (
      <div>
        <h3 className="text-center mt-5 mb-5 text-capitalize text-secondary">
          patient Details
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="fullname">Fullname</label>
              <input
                value={data.fullname}
                onChange={this.handleChange}
                type="text"
                id="fullname"
                name="fullname"
                className="form-control"
                error={errors.fullname}
              />
              {errors && <p className="text-danger"> {errors.fullname} </p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="age">Age</label>
              <input
                value={data.age}
                onChange={this.handleChange}
                type="text"
                id="age"
                name="age"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.age} </p>}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="temperature">Temperature</label>
              <input
                value={data.temperature}
                onChange={this.handleChange}
                type="text"
                id="temperature"
                name="temperature"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.temperature} </p>}
            </div>
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="weight">Weight</label>
              <input
                value={data.weight}
                onChange={this.handleChange}
                type="text"
                id="weight"
                name="weight"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.weight} </p>}
            </div>
            <div className="form-group col-md-4 mb-2">
              <label htmlFor="height">Height</label>
              <input
                value={data.height}
                onChange={this.handleChange}
                type="text"
                id="height"
                name="height"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.height} </p>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-6">
              <label htmlFor="status">Patients health status</label>
              <input
                value={data.status}
                onChange={this.handleChange}
                type="text"
                id="status"
                name="status"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.status} </p>}
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="nextofkin">Next of kin</label>
              <input
                value={data.nextofkin}
                onChange={this.handleChange}
                type="text"
                id="nextofkin"
                name="nextofkin"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.nextofkin} </p>}
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="contact">Contact</label>
              <input
                value={data.contact}
                onChange={this.handleChange}
                type="text"
                id="contact"
                name="contact"
                className="form-control"
              />
              {errors && <p className="text-danger"> {errors.contact} </p>}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 mb-6">
              <label htmlFor="age">Doctors report</label>
              <input
                value={data.report}
                onChange={this.handleChange}
                type="text"
                id="report"
                name="report"
                className="form-control "
              />
              {errors && <p className="text-danger"> {errors.report} </p>}
            </div>
          </div>
          {this.renderButton("Submit")}
        </form>
      </div>
    );
  }
}

export default PatientForm;
