import {
  ADD_USER_INFO,
  ADD_USER_INFO_ERR,
  DELETE_USER,
  DELETE_USER_ERR,
  TOGGLE_CHECKED_ERR,
  TOGGLE_CHECKED,
  UPDATE_USER,
  UPDATE_USER_ERR,
  // ADD_DEPARTMENT,
  // ADD_DEPARTMENT_ERR,
  ADD_TIME,
  ADD_TIME_ERR,
  UPLOAD_FILE,
  UPLOAD_FILE_ERR
} from "../Type";

export const uploadfiles = (path, files) => {
  return(dispatch, getState, { getFirebase }) =>{
    const firebase = getFirebase()
    for (const file of files) {
      firebase
        .storage()
        .ref(path)
        .child(file.name)
        .put(file)
        .then(() => {
          dispatch({ type: UPLOAD_FILE, file });
        })
        .catch((err) => {
          dispatch({ type: UPLOAD_FILE_ERR, err });
        });
    }
    
    
  }
}

// //Add new Department
// export const AddDepart = (newDepart) => {
//   return (dispatch, getState, { getFirebase }) => {
//     const firestore = getFirebase().firestore();
//     // const authorId = getState().firebase.auth.uid
//     firestore
//       .collection("departments")
//       .add({
//         ...newDepart,
//         // authorId:authorId,
//         date: new Date(),
//       })
//       .then(() => {
//         dispatch({ type: ADD_DEPARTMENT, newDepart });
//       })
//       .catch((err) => {
//         dispatch({ type: ADD_DEPARTMENT_ERR, err });
//       });
//   };
// };

//Delete Doctor
export const deleteDoctor = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("users")
      .doc(account.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_USER });
      })
      .catch((err) => {
        dispatch({ type: DELETE_USER_ERR, err });
        console.log(err);
      });
  };
};

//Update user doctor infos
export const updateDoctor = (id, account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("users")
      .doc(id)
      .set(
        {
          ...account,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: UPDATE_USER });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERR, err });
      });
  };
};


//Add new Patient
export const addPatient = (doctorid,account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid;
    
    firestore
      .collection("patients")
      .add({
        ...account,
        authorId: doctorid,
        dId: doctorid,
        date: new Date(),
      })
      .then(() => {
        dispatch({ type: ADD_USER_INFO }, account);
      })
      .catch((err) => {
        dispatch({ type: ADD_USER_INFO_ERR }, err);
      });
  };
};
//Delete Patient
export const deletePatient = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("patients")
      .doc(account.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_USER });
      })
      .catch((err) => {
        dispatch({ type: DELETE_USER_ERR, err });
        console.log(err);
      });
  };
};

//Update user Patient infos
export const updatePatient = (id, account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("patients")
      .doc(id)
      .set(
        {
          ...account,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: UPDATE_USER });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERR, err });
      });
  };
};

//mark patient consultation as done
export const toggleChecked = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;

    firestore
      .collection("patients")
      .doc(account.id)
      .set(
        {
          ...account,
          checked: !account.checked,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: TOGGLE_CHECKED, account });
      })
      .catch((err) => {
        dispatch({ type: TOGGLE_CHECKED_ERR, err });
      });
  };
};
//ADD Doctor Note
export const addDoctorNote = (id, account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    firestore
      .collection("patients")
      .doc(id)
      .set(
        {
          ...account,
          doctorName: account.doctorName,
          doctorNote: account.doctorNote
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: UPDATE_USER });
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_ERR, err });
      });
  };
};

//ADD Doctor consult date
export const addDays = (times) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    const id = getState().firebase.auth.uid;
    firestore
      .collection("users")
      .doc(id)
      .set(
        {
          ...times,
        },
        { merge: true }
      )
      .then(() => {
        dispatch({ type: ADD_TIME}, times );
      })
      .catch((err) => {
        dispatch({ type: ADD_TIME_ERR }, err);
      });
  };
};

//ADD Doctor consult update time
export const addDaysUpdate = (account) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // const id = account.userId;
    const id = getState().firebase.auth.uid;
    firestore
      .collection("users")
      .doc(id)
      .update({
        ...account,
      })
      .then(() => {
        dispatch({ type: TOGGLE_CHECKED, account });
      })
      .catch((err) => {
        dispatch({ type: TOGGLE_CHECKED_ERR, err });
      });
  };
};
