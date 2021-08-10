import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import api from '../../services'

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
      .oneOf([yup.ref("password"), null], "As senhas devem ser iguais")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = ({ username, email, password }) => {
    const newUser = { username, email, password };

    api.post('/users/', newUser)
      .then((res) => console.log(res))
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <div>
          <input placeholder="Nome de Usuario" {...register("username")} />
          {errors.username?.message}
        </div>
        <div>
          <input placeholder="Email" {...register("email")} />
          {errors.email?.message}
        </div>
        <div>
          <input placeholder="Senha" type='password'{...register("password")} />
          {errors.password?.message}
        </div>
        <div>
          <input placeholder="Email" type='password'{...register("passwordConfirm")} />
          {errors.passwordConfirm?.message}
        </div>
        <div>
          <button type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>);
};

export default Signup;

