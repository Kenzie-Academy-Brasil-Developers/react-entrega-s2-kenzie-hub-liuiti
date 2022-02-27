import styled from "styled-components";
import logo from "../../assets/Logo.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey-4);
`;

export const Form = styled.form`
  min-height: 85vh;
  background-color: var(-grey-3);
  border-radius: 3.21px;
  padding: 60px 18px;
  box-shadow: 32px 0px 3.21px rgba(0, 0, 0, 0.25);
  div + div {
    margin-top: 15px;
  }
  > h1 {
    color: var(--grey-0);
    text-align: center;
    margin-bottom: 40px;
    font-size: 14.44px;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    color: var(--grey-1);
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const Logo = styled.div`
  width: 101px;
  height: 14px;
  background: url(${logo}) no-repeat center;
`;
