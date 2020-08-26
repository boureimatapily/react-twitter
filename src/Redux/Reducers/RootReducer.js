import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer  } from 'react-redux-firebase';
import authReducer from "./authReducer";
import UserReducer from "./UserReducer";


export default combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    user: UserReducer
})