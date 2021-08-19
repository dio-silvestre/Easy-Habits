import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
  const [auth, setAuth] = useState(token);
  const history = useHistory();

  const logIn = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        // token
        const token = response.data.access;
        // localStorage.clear();
        localStorage.setItem("Habits:token", JSON.stringify(token));
        setAuth(token);

        // user
        const decodingUserId = jwt_decode(token);
        localStorage.setItem(
          "Habits:userId",
          JSON.stringify(decodingUserId.user_id)
        );

        toast.success("Sucesso ao fazer login");
        return history.push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha inválidos");
      });
  };

  const logOut = () => {
    setAuth("");
    localStorage.clear();
    toast.success("Até breve!");
  };

  const userId = localStorage.getItem("Habits:userId");

  return (
    <AuthContext.Provider
      value={{ token: auth, setAuth, userId, logIn, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
