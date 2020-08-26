 import { toast } from "react-toastify";



export default function authReducer(state = {}, action) {
  switch (action.type) {
    case "LOG_IN":
      toast.success("Login Success");
      return state;
    case "LOG_IN_ERR":
      toast.error("Login error");
      return state;
    case "SIGN_UP":
      toast.success("Sign up succes");
      return state;
    case "SIGN_UP_ERR":
      toast.error("Signup error");
      return state;
    case "LOG_OUT":
      toast.success("Log out success");
      return state;
    case "LOG_OUT_ERR":
     toast.error("Log out error try again");
     return state;
    default:
      return state
  }
}