import { Container } from "./styles";

const Button = ({ children, hoverColor, backgroundColor, ...rest }) => {
  return (
    <Container
      {...rest}
      backgroundColor={backgroundColor}
      hoverColor={hoverColor}
    >
      {children}
    </Container>
  );
};

export default Button;
