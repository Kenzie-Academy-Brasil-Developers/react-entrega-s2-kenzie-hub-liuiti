import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import {
  ContainerSelectDetail,
  Select,
  Form,
  Container,
  Context,
  ModalHeader,
  ModalBody,
  ModalBottoms,
} from "./styles";

const ModalDetails = ({ newTechsId, title, token, show, onClose }) => {
  const schema = yup.object().shape({
    status: yup.string().required("Status obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    api
      .put(`/users/techs/${newTechsId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia atualizada com sucesso!");
      })
      .catch((_) => toast.error("Erro ao atualizar a tecnologia"));
  };

  const deleteTech = () => {
    api
      .delete(`/users/techs/${newTechsId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Tecnologia deletada com sucesso!");
      })
      .catch((_) => toast.error("Erro ao deletar a tecnologia"));
  };

  if (!show) {
    return null;
  }

  return (
    <Container>
      <Context>
        <ModalHeader>
          <h1>Tecnologia detalhes</h1>
          <button onClick={onClose} width="50" height="20">
            X
          </button>
        </ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h1> Nome do projeto</h1>
            <span>{title}</span>
            <ContainerSelectDetail>
              <span>Status</span>
              <Select {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </Select>
            </ContainerSelectDetail>
            <ModalBottoms>
              <Button
                width="163px"
                type="submit"
                backgroundColor="#59323F"
                hoverColor="#59323F"
              >
                Salvar alterações
              </Button>
              <Button
                onClick={() => deleteTech()}
                width="78px"
                type="button"
                backgroundColor="#868E96"
                hoverColor="#343B41"
              >
                Excluir
              </Button>
            </ModalBottoms>
          </Form>
        </ModalBody>
      </Context>
    </Container>
  );
};

export default ModalDetails;
