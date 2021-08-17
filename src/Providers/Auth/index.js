import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [auth, setAuth] = useState(token);
  const userId = localStorage.getItem("Habits:userId") || "";
  const history = useHistory();

  const logIn = (data, setError) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        localStorage.clear();
        localStorage.setItem("Habits:token", JSON.stringify(token));
        setAuth(token);
        const decodingUserId = jwt_decode(token);
        localStorage.setItem(
          "Habits:userId",
          JSON.stringify(decodingUserId.user_id)
        );
        toast.success("Sucesso ao fazer login");
        return history.push("/dashboard");
      })
      .catch((err) => setError(true));
  };

  const logOut = () => {
    setAuth("");
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
