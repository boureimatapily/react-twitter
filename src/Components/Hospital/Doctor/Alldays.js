import React from "react";

export default function Alldays({ day }) {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
            <h3 className="text-center">Availability</h3>

            </div>
        </div>
      <div className="row">
        <div className="col d-flex flex-column">
          <h6>
            Monday: {day.mondayopen} | {day.mondayclose}{" "}
          </h6>
          <h6>
            Tuesday: {day.tuesdayopen} | {day.tuesdayclose}
          </h6>
          <h6>
            Wednesday: {day.wednesdayopen} | {day.wednesdayclose}
          </h6>
          <h6>
            Thursday: {day.thursdayopen} | {day.thursdayclose}
          </h6>
          <h6>
            Friday: {day.fridayopen} | {day.fridayclose}
          </h6>
          <h6>
            Saturday: {day.saturdayopen} | {day.saturdayclose}
          </h6>
          <h6>
            Sunday: {day.sundayopen} | {day.sundayclose}
          </h6>
        </div>
       
      </div>
    </div>
  );
}
