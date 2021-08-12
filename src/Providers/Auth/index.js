import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [decodedUser, setDecodedUser] = useState();
  const decoded = jwt_decode(token);
  console.log(token);
  console.log(decoded);
  console.log(decodedUser);

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
        setDecodedUser(decoded);

        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn, decodedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
