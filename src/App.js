import React from "react";
//import { Route, Switch } from "react-router-dom";
//import Navbar from "./Components/Navbar";
//import { ToastContainer } from "react-toastify"; // ToastContainer to acces to toast notify everywhere in the project
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="app" >
      <Sidebar/>
      
      
    </div >
  );
}

export default App;



// {/* <ToastContainer />
//       <Navbar />
//       <Switch> */}
//         {/* <Route exact path="/" component={Home} />
//         <Route exact path="/dashboard" component={Dashboard} />
//         <Route exact path="/login" component={Login} />
//         <Route exact path="/editgroup/:id" component={EditGroup} />
//         <Route exact path="/singlesusu/:id" component={EditSusuType} />
//       </Switch> */}