import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("Habits:token") || "";
<<<<<<< HEAD
  const [userDecode, setUserDecode] = useState(token);
  const [auth, setAuth] = useState(token);
  const history = useHistory();
  const logIn = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;

        localStorage.clear();
        localStorage.setItem("Habits:token", JSON.stringify(token));
        setAuth(token);
        setUserDecode(jwt_decode(token));
        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AuthContext.Provider value={{ token: auth, setAuth, logIn, userDecode }}>
=======
  const [auth, setAuth] = useState(token);

  const logIn = (data, history) => {
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
        history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Nome de usuário ou senha inválidos!");
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
>>>>>>> develop
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
