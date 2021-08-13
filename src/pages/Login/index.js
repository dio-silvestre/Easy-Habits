import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link, useHistory } from "react-router-dom";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Button,
} from "./styles";

const Login = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = ({ username, password }) => {
    const User = { username, password };
    console.log(User);
  };

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Entrar</h1>
            <h3> Entre com seu usuário e senha </h3>
            <TextField
              id="standard-basic"
              label="Nome de usuário"
              {...register("username")}
            />
            <div className="error"> {errors.username?.message}</div>

            <TextField
              id="standard-basic"
              label="Senha"
              type="password"
              {...register("password")}
            />
            <div className="error"> {errors.password?.message}</div>

            <Button type="submit"> ENTRAR </Button>
            <p>
              Não tem uma conta ? Faça seu <Link to="/signup">Cadastro</Link>
            </p>
          </form>
          <span>Página inicial </span>
          <p>
            <Link to="/dashboard">
              <ArrowForwardIosIcon />
            </Link>
          </p>
        </AnimationContainer>
      </Content>
      <Background>
        <section></section>
      </Background>
    </Container>
  );
};

export default Login;
