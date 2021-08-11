import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Link } from "react-router-dom";
import api from "../../services/api";
import {
  Container,
  Background,
  Content,
  AnimationContainer,
  Button,
} from "./styles";

import TextField from "@material-ui/core/TextField";

const Signup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "A senha deve conter no minimo 6 caracteres"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ username, email, password }) => {
    const newUser = { username, email, password };

    api
      .post("/users/", newUser)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <Container>
      <Background>
        <section></section>
      </Background>
      <Content>
        <AnimationContainer>
          <form>
            <h1>Cadastre -se</h1>
            <TextField id="standard-basic" label="Email" />

            <TextField id="standard-basic" label="Email" />
            <TextField id="standard-basic" label="Senha" />
            <TextField id="standard-basic" label="Confirme sua senha" />
            <Button>Enviar</Button>
            <p>
              Já tem uma conta ? Faça o <Link to="/login">Login</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default Signup;
