import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";

const Login = () => {
  const { logIn } = useAuth();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    logIn(data);
  };

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
