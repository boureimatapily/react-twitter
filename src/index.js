import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider, useSelector } from "react-redux"; // redux provider
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase"; // new update from react-redux-firebase v3
import firebase from "./Config/fbconfig"; // import firebase
import store from "./Redux/Store"; // import redux store
import { createFirestoreInstance } from "redux-firestore"; // allow to create firestore intance in our app

// react-redux-firebase config  from react-redux-firebase version 3 to store user profile
const rrfConfig = {
  userProfile: "users", // firestore collection where users profiles are stored in database
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB, allow to link firebase and firestore
  //enableClaims: true, // Get custom claims along with the profile, allow to define role in our app
  //presence: "presences", // where list of online users is stored in database
  //sessions: "sessions", // where users sessions are stored in the datebase
};

// creating react-redux-firebase Props from react-redux-firebase version 3
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, // <- needed if using firestore
};

//Loding animation before data appear
function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <div className="mx-auto">
        <div
          className="spinner-border loadinganim"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  return children;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* ADD BrowserRouter from react-router-dom */}
        <Router>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
