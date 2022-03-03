import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  ContainerSelect,
  Select,
  Form,
  Container,
  Context,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./styles";

const ModalAddTechs = ({ token, showModalAdd, onClose }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Nome obrigatório"),
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(
        (_) => toast.success("Tecnologia cadastrada com sucesso"),
        onClose()
      )
      .catch((_) => toast.error("Já existe uma tecnologia com este nome"));
  };

  if (!showModalAdd) {
    return null;
  }
  return (
    <Container>
      <Context>
        <ModalHeader>
          <h1>Cadastrar Tecnologia</h1>
          <button onClick={onClose} width="50" height="20">
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input
              placeholder="Digite o nome"
              {...register("title")}
              error={errors.title?.message}
            />
            <ContainerSelect>
              <span>Selecionar status</span>
              <Select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
            </ContainerSelect>
            <ModalFooter>
              <Button
                type="submit"
                backgroundColor="#FF577F"
                hoverColor="#FF427F"
              >
                Cadastrar tecnologia
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Context>
    </Container>
  );
};

export default ModalAddTechs;
