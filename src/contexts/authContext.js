import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import { authReducer } from "../reducers/authReducer";

const AuthContext = createContext();
const useAuth = () =>  useContext(AuthContext);

const AuthContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(authReducer, {
    type: "login", 
    payload: {
      token: JSON.parse(localStorage.getItem("token")), 
      user: JSON.parse(localStorage.getItem("user"))
    } 
  });
return(
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>)
}
export {AuthContextProvider, useAuth};