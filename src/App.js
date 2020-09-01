import React from "react";
//import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
//import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>

      <h1>hello twitter</h1>
      {/* <ToastContainer />
      <Navbar />
      <Switch> */}
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/editgroup/:id" component={EditGroup} />
        <Route exact path="/singlesusu/:id" component={EditSusuType} />
      </Switch> */}
    </React.Fragment>
  );
}

export default App;
