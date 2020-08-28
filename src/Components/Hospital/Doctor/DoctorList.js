import React from "react";
import firebase from "../../../Config/fbconfig";
import SingleDoctor from "./SingleDoctor";

class DoctorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      search:""
    };
  }


  componentDidMount() {
    firebase
      .firestore() //access firestore
      .collection("users") //access "items" collection
      // .where("checked", "==", true)
      .onSnapshot((snapshot) => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map((doc) => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data(), //spread operator merges data to id.
        }));
        this.setState({ doctors: listItems }); //items is equal to listItems
      });
  }
  handleSearch=(e)=>{
      e.preventDefault()
      console.log(this.state)
  }
handleChange=(e)=>{
  e.preventDefault()
  this.setState({[e.target.name]:e.target.value})
  console.log(this.state)

}

  render() {
    const { doctors } = this.state;

    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <form className="d-flex" onSubmit={this.handleSearch}>
            <div className="form-group d-flex col-6 mb-3">
              <input
                className="form-control col-4 mr-2 inputsStyle"
                type="search"
                placeholder="Enter Name for seacrh"
                aria-label="Search"
                name="search"
                onChange={this.handleChange}
                value={this.state.search}
              />
              <button class="btn btn-outline-success navTabsBtn" type="submit">
                Search
              </button>
            </div>
          </form>
          <div className="col d-flex flex-row flex-wrap">
            {doctors &&
              doctors.map((doctor) => (
                <div
                  key={doctor.fullname}
                  className="col-sm-12 col-xs-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 mb-2"
                >
                  <SingleDoctor doctor={doctor} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DoctorList;
