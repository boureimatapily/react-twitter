import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Doctor from "./Pages/Doctor";
import Hospital from "./Pages/Hospital";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import EditPatient from "./Components/Hospital/Patient/EditPatient";
import PatientList from "./Components/Hospital/Patient/PatientList";
import EditDoctor from "./Components/Hospital/Doctor/EditDoctor";
import EditSingleDoctor from "./Components/Hospital/Doctor/EditSingleDoctor";
import AdminPatientTab from "./Components/Hospital/AdminPatientTab";



function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/doctor" component={Doctor} />
        <Route exact path="/adminpatienttab" component={AdminPatientTab} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit/:id" component={EditPatient} />
        <Route exact path="/editdoctor/:id" component={EditDoctor} />
        <Route exact path="/editsingledoctor/:id" component={EditSingleDoctor} />
        <Route exact path="/patientlist" component={PatientList} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
