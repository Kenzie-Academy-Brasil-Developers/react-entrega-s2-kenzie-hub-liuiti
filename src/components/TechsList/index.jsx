import { ListContainer } from "./styles";

const TechsList = ({ tech }) => {
  return (
    <ListContainer>
      <h1>{tech.title}</h1>
      <span>{tech.status}</span>
    </ListContainer>
  );
};

export default TechsList;
