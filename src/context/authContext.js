import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children}) => {

  const [currentUser, setCurrrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:4000/auth/login", inputs, {
      withCredentials: true,
    })
    setCurrrentUser(res.data);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser])

  return (
    <AuthContext.Provider value={{currentUser, login}}>
      {children}
    </AuthContext.Provider>
  )
}

