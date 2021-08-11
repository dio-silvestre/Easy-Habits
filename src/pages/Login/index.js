import { Link, Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

const Login = ({ authenticated, setAuthenticated }) => {
  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api
      .post("/sessions/", data)
      .then((response) => {
        reset();
        const token = response.data.access;

        localStorage.setItem("Habits:token", JSON.stringify(token));

        setAuthenticated(true);

        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login</h1>
      <h3>Entre com seu usuário e senha</h3>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          {...register("username")}
          name="username"
          placeholder="Nome de usuário"
          error={errors.username?.message}
        ></input>
        <input
          {...register("password")}
          name="password"
          placeholder="Senha"
          type="password"
          error={errors.password?.message}
        ></input>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Não tem uma conta? Faça o seu <Link to="/signup">cadastro</Link>
      </p>

      <p>
        <Link to="/">Página inicial</Link>
      </p>
    </div>
  );
};

export default Login;
