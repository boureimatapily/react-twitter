import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Hospital from "./Pages/Hospital";
import Navbar from "./Components/Navbar";
import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project
import 'react-toastify/dist/ReactToastify.css';
import Login from "./Pages/Login";
import EditPatient from "./Components/Hospital/Patient/EditPatient";
import PatientList from "./Components/Hospital/Patient/PatientList";
//import EditDoctor from "./Components/Hospital/Doctor/EditDoctor";
// import EditSingleDoctor from "./Components/Hospital/Doctor/EditSingleDoctor";
import AdminPatientTab from "./Components/Hospital/AdminPatientTab";
import EditGroup from "./Components/Susu/Susu_Group/EditGroup";
import EditSusuType from "./Components/Susu/Susu_frequency/EditSusuType";


function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/adminpatienttab" component={AdminPatientTab} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/edit/:id" component={EditPatient} />
        <Route exact path="/editgroup/:id" component={EditGroup} />
        <Route exact path="/singlesusu/:id" component={EditSusuType} />
        <Route exact path="/patientlist" component={PatientList} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
