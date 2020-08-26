// import {
//     ADD_USER_INFO,
   
//   } from "../Type";
  
  export const noncheckedPatient = () => {
    return(dispatch, getState, { getFirebase }) =>{
      const firestore = getFirebase().firestore()
      firestore //access firestore
      .collection("patients") //access "items" collection
      .where("checked", "==", false)
      .onSnapshot(snapshot => {
        //You can "listen" to a document with the onSnapshot() method.
        const listItems = snapshot.docs.map(doc => ({
          //map each document into snapshot
          id: doc.id, //id and data pushed into items array
          ...doc.data() //spread operator merges data to id.
        }))
         //items is equal to listItems
      });
      
  } }