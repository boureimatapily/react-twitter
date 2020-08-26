// import firebase from "../Config/fbconfig";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk"; // thunk middleware
import RootReducer from "./Reducers/RootReducer"
// import { reduxFirestore, getFirestore} from 'redux-firestore'
import { getFirebase } from 'react-redux-firebase';

  const store  = createStore(
    RootReducer,
     compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase})), // to add other middleware
      )

    );

export default store