import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../Providers/Auth";
import { Link, useHistory } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Button,
  HeaderContainer,
} from "./styles";

const Login = () => {
  const { logIn } = useAuth();

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitFunction = (data) => {
    logIn(data, history);
    reset();
  };

  return (
    <HeaderContainer>
      <Link to="/">
        <div className="easyHabits">EasyHabits</div>
      </Link>
      <Container>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>Entrar</h1>
              <h3> Entre com seu usuário e senha</h3>
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
            <span>Página inicial</span>
            <p>
              <Link to="/dashboard">
                <HomeIcon />
              </Link>
            </p>
          </AnimationContainer>
        </Content>
        <Background>
          <section></section>
        </Background>
      </Container>
    </HeaderContainer>
  );
};

export default Login;
