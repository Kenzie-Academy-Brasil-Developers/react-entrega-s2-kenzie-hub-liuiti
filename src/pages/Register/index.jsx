import Input from "../../components/Input";
import Button from "../../components/Button";
import {
  Select,
  BoxInput,
  Logo,
  Container,
  Box,
  Content,
  Form,
  SelectContainer,
} from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Register = ({ auth }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Senha obrigatória"),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("Confirmação obrigatória"),
    course_module: yup.string().required("Módulo obrigatório"),
    contact: yup.string().required("Contato obrigatório"),
    bio: yup.string(),
  });

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  if (auth) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmit = (data) => {
    delete data.passwordConfirmation;
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Usuário criado com sucesso!");
        history.push("/");
      })
      .catch((err) => toast.error("Erro ao criar usuário"));
  };

  return (
    <Container>
      <Box>
        <Logo />
        <button onClick={() => history.push("/")} type="button">
          Voltar
        </button>
      </Box>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <span>Rápido e grátis, vamos nessa</span>

          <BoxInput>
            <Input
              label="Nome"
              placeholder="Digite aqui seu nome"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              label="Email"
              placeholder="Digite aqui seu email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              label="Biografia"
              placeholder="Digite aqui sua biografia"
              register={register}
              name="bio"
              error={errors.bio?.message}
            />
            <Input
              label="Contato"
              placeholder="Digite aqui seu contato"
              register={register}
              name="contact"
              error={errors.contact?.message}
            />
            <Input
              label="Senha"
              placeholder="Digite aqui sua senha"
              register={register}
              name="password"
              error={errors.password?.message}
              type="password"
            />
            <Input
              label="Confirmação de senha"
              placeholder="Confirme aqui a sua senha"
              register={register}
              name="passwordConfirmation"
              error={errors.passwordConfirmation?.message}
              type="password"
            />
            <SelectContainer>
              <span>Selecionar Módulo</span>
              <Select {...register("course_module")}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </Select>
            </SelectContainer>
          </BoxInput>
          <Button type="submit" backgroundColor="#59323F" hoverColor="#59323F">
            Cadastrar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
