import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => props.backgroundColor};
  color: var(--white);
  height: 48px;
  border-radius: 4px;
  border: 1.22px solid ${(props) => props.backgroundColor};
  transition: 0.5s;
  width: 280px;
  padding: 0 1.375rem;
  margin-top: 22px;
  font-size: 12.83px;

  :hover {
    background: ${(props) => props.hoverColor};
    border: 1.22px solid ${(props) => props.hoverColor};
  }

  @media (min-width: 800px) {
    width: 330px;
  }
`;
