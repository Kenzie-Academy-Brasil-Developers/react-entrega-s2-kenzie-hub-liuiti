import styled from "styled-components";
import logo from "../../assets/Logo.svg";

export const Logo = styled.div`
  width: 101px;
  height: 14px;
  background: url(${logo}) no-repeat center;
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--grey-4);
  gap: 35px;
`;

export const Box = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: baseline;
  flex-direction: row;
  gap: 140px;
  > button {
    width: 60px;
    background-color: var(--grey-3);
    border-color: var(--grey-3);
    color: var(--grey-0);
    font-size: 14px;
  }
  @media (min-width: 800px) {
    gap: 505px;
    width: 675px;
  }
`;

export const Content = styled.div`
  color: var(--grey-0);
  display: flex;
  flex-direction: column;
`;

export const BoxUser = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  gap: 10px;
  text-align-last: left;
  > h1 {
    font-size: 18px;
  }
  > span {
    color: var(--grey-1);
  }
  @media (min-width: 800px) {
    flex-direction: row;
    gap: 270px;
  }
`;

export const TechHeader = styled.div`
  display: flex;
  flex-direction: row;
  gap: 170px;
  margin-left: 12px;
  margin-top: 80px;
  align-items: center;
  justify-content: center;

  @media (min-width: 800px) {
    > input {
      margin-left: 400px;
    }
  }
`;

export const BoxTechs = styled.div`
  flex-direction: column;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  > span {
    font-size: 16px;
  }

  @media (min-width: 800px) {
    width: 300px;
  }
`;

export const ContextTechs = styled.div`
  display: flex;
  width: 285px;
  background-color: var(--grey-3);
  padding: 16px 8px;
  @media (min-width: 800px) {
    width: 696px;
    margin-left: 400px;
  }
  > button {
    width: 285px;
    height: 40px;
    color: var(--grey-0);
    background-color: var(--grey-4);
    border: none;
    :hover {
      background-color: var(--grey-4);
    }
    @media (min-width: 800px) {
      width: 696px;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
