import {
  LOG_IN,
  LOG_IN_ERR,
  SIGN_UP,
  SIGN_UP_ERR,
  LOG_OUT,
  LOG_OUT_ERR,
} from "../Type";

export const register = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(creds.email, creds.password)
      .then((res) => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            userid:res.user.uid,
            fullname: creds.fullname,
            email: creds.email,
            role: creds.role,
            department: creds.department,
            speciality: creds.speciality,
            status: creds.status,
            initials: creds.fullname[0] + creds.fullname[1],
            mondayopen: creds.mondayopen,
            mondayclose: creds.mondayclose,
            tuesdayopen: creds.tuesdayopen,
            tuesdayclose: creds.tuesdayclose,
            wednesdayopen: creds.wednesdayopen,
            wednesdayclose: creds.wednesdayclose,
            thursdayopen: creds.thursdayopen,
            thursdayclose: creds.thursdayclose,
            fridayopen: creds.fridayopen,
            fridayclose: creds.fridayclose,
            saturdayopen: creds.saturdayopen,
            saturdayclose: creds.saturdayclose,
            sundayopen: creds.sundayopen,
            sundayclose: creds.sundayclose,
          });
      })
      .then(() => {
        dispatch({ type: SIGN_UP });
      })
      .catch((err) => {
        dispatch({ type: SIGN_UP_ERR }, err);
        console.log(err);
      });
  };
};

export const login = (creds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signInWithEmailAndPassword(creds.email, creds.password)
      .then(() => {
        dispatch({ type: LOG_IN });
      })
      .catch((err) => {
        dispatch({ type: LOG_IN_ERR }, err);
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOG_OUT });
      })
      .catch((err) => {
        dispatch({ type: LOG_OUT_ERR }, err);
        console.log(err);
      });
  };
};

export const authenticateWithGoogle = (onSuccess) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((user) => {
        console.log(user);
        onSuccess();
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
