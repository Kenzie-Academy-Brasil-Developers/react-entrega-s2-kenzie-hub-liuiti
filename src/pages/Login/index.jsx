import Input from "../../components/Input";
import Button from "../../components/Button";
/* import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"; */
import { Container, Box, Form, Logo } from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ auth, setAuth }) => {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useHistory();

  const onSubmit = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        localStorage.setItem("@KenzieHub:user", JSON.stringify(user));
        setAuth(true);
        history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválidos"));
  };

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <Input
          label="Email"
          placeholder="Digite seu email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          label="Senha"
          placeholder="Digite a sua senha"
          register={register}
          name="password"
          type="password"
          error={errors.password?.message}
        />
        <Box>
          <Button type="submit" backgroundColor="#FF577F" hoverColor="#FF427F">
            Entrar
          </Button>
          <span>Ainda não possui uma conta?</span>
          <Button
            onClick={() => history.push("/register")}
            type="button"
            backgroundColor="#868E96"
            hoverColor="#343B41"
          >
            Cadastre-se
          </Button>
        </Box>
      </Form>
    </Container>
  );
};

export default Login;
