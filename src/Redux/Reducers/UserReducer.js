import {
  ADD_USER_INFO,
  ADD_USER_INFO_ERR,
  DELETE_USER,
  DELETE_USER_ERR,
  TOGGLE_CHECKED,
  TOGGLE_CHECKED_ERR,
  UPDATE_USER,
  UPDATE_USER_ERR,
  ADD_DEPARTMENT,
  ADD_DEPARTMENT_ERR,
  ADD_TIME,
  ADD_TIME_ERR,
  UPLOAD_FILE,
  UPLOAD_FILE_ERR
} from "../Type";
import { toast } from "react-toastify";

const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_USER_INFO:
      toast.success("Patient infos added");
      return state;
    case UPLOAD_FILE:
      toast.success("file uploaded");
      return state;
    case UPLOAD_FILE_ERR:
      toast.error("file upload error");
      return state;
    case ADD_USER_INFO_ERR:
      toast.error("an error occured");
      return state;
    case DELETE_USER:
      toast.warn("Patient deleted");
      return state;
    case DELETE_USER_ERR:
      toast.error("an error occured");
      return state;
    case TOGGLE_CHECKED:
        toast.info("consulting confirmed");
        return state;
    case TOGGLE_CHECKED_ERR:
        toast.error("an error occured, try again");
        return state;
    case UPDATE_USER:
         toast.info("Info updated");
         return state;
    case UPDATE_USER_ERR:
         toast.error("Infos update error");
         return state;
    case ADD_DEPARTMENT:
          toast.info("Department added");
          return state;
    case ADD_DEPARTMENT_ERR:
          toast.error("An error occured");
          return state;
    case ADD_TIME:
          toast.info("times added");
          return state;
    case ADD_TIME_ERR:
          toast.error("An error occured");
          return state;
          
    default:
      return state;
  }
};
export default UserReducer;
