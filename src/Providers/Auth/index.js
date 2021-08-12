import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";

  const decoded = jwtDecode(token);
  console.log(decoded);

  const [auth, setAuth] = useState(token);

  const history = useHistory();

  const logIn = (data) => {
    console.log(data);
    api
      .post("/sessions/", data)
      .then((response) => {
        console.log(response);
        const token = response.data.access;

        localStorage.clear();
        localStorage.setItem("Habits:token", JSON.stringify(token));
        setAuth(token);

        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
