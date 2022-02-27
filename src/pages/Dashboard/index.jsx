import ModalAddTechs from "../../components/ModalAddTechs";
import {
  TechHeader,
  BoxUser,
  BoxTechs,
  Container,
  Box,
  Content,
  Logo,
  ContextTechs,
  ContainerTechs,
} from "./styles";
import { Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import plus from "../../assets/plus.svg";
import TechsList from "../../components/TechsList";
import ModalDetails from "../../components/ModalDetails";

const Dashboard = ({ auth, setAuth }) => {
  const history = useHistory();
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [show, setShow] = useState(false);
  const [techs, setTechs] = useState([]);
  const [newTechsId, setNewTechsId] = useState("");
  const [title, setTitle] = useState("");

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:user")) || "{}"
  );

  useEffect(() => {
    let isMounted = true;
    async function getUser() {
      await api
        .get(`/users/${user.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          if (isMounted) {
            setTechs(response.data.techs);
          }
        })
        .catch((err) => {
          toast.error("Inválido!");
        });
    }
    getUser();
    return () => {
      isMounted = false;
    };
  }, [techs]);

  if (!auth) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Box>
        <Logo />
        <button
          onClick={() => {
            setAuth(false);
            localStorage.clear();
            history.push("/");
          }}
        >
          Sair
        </button>
      </Box>
      <Content>
        <BoxUser>
          <h1>Olá, {user.name}</h1>
          <span>{user.course_module}</span>
        </BoxUser>
        <BoxTechs>
          <TechHeader>
            <span>Tecnologias</span>
            <input
              type="image"
              src={plus}
              alt="Submit"
              width="15"
              height="15"
              onClick={() => setShowModalAdd(true)}
            />
            <ModalAddTechs
              token={token}
              onClose={() => setShowModalAdd(false)}
              showModalAdd={showModalAdd}
            />
          </TechHeader>
          <ContainerTechs>
            <ModalDetails
              newTechsId={newTechsId}
              title={title}
              token={token}
              onClose={() => setShow(false)}
              show={show}
            />
            {techs.map((tech, index) => (
              <ContextTechs key={index}>
                <button
                  onClick={() => {
                    setNewTechsId(tech.id);
                    setShow(true);
                    setTitle(tech.title);
                  }}
                >
                  <TechsList tech={tech} />
                </button>
              </ContextTechs>
            ))}
          </ContainerTechs>
        </BoxTechs>
      </Content>
    </Container>
  );
};

export default Dashboard;
