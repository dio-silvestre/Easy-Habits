import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [auth, setAuth] = useState(token);
  const [decodedUser, setDecodedUser] = useState(token);
  const userId = localStorage.getItem("Habits:userId") || "";
  console.log(decodedUser);
  const history = useHistory();

  const logIn = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        localStorage.clear();
        localStorage.setItem("Habits:token", JSON.stringify(token));
        if (token !== "") {
          setDecodedUser(jwt_decode(token));
          localStorage.setItem("Habits:userId", JSON.stringify(decodedUser));
        }
        setAuth(token);
        toast.success("Sucesso ao fazer login");
        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Nome de usuário ou senha inválidos"));
  };

  console.log(userId);

  return (
    <AuthContext.Provider
      value={{ token: auth, setAuth, logIn, decodedUser, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
