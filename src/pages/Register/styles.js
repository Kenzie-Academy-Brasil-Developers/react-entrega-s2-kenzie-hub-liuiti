import logo from "../../assets/Logo.svg";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--grey-4);
  overflow: auto;
`;

export const Logo = styled.div`
  width: 105.59px;
  height: 24.53px;
  background: url(${logo}) no-repeat center;
  background-position: bottom;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.section`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  gap: 80px;
  > button {
    background-color: var(--grey-3);
    border-color: var(--grey-3);
    width: 70px;
    color: var(--grey-0);
    font-size: 14px;
  }
  @media (min-width: 800px) {
    gap: 150px;
    margin-top: 20px;
  }
`;

export const Form = styled.form`
  min-height: 90vh;
  text-align: center;
  margin-top: 22px;
  
  > span {
    color: var(--grey-1);
    font-size: 12px;
    margin-top: 2px;
    gap: 50px;
    @media (min-width: 800px) {
      font-size: 15px;
    }
  }

  > h1 {
    color: var(--grey-0);
    font-size: 15px;
    margin-bottom: 10px;
    text-align: center;
    @media (min-width: 800px) {
      font-size: 18px;
    }
  }
  
  }
`;

export const BoxInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const Select = styled.select`
  width: 280px;
  @media (min-width: 800px) {
    width: 330px;
  }
  height: 38.5px;
  background: var(--grey-2);
  color: var(--grey-1);
  font-size: 14px;
  border: 1.22px solid var(--grey-4);
  padding: 0px 16px;
  margin-top: 10px;
  option {
    color: var(--grey-0);
    background: var(--grey-2);
  }
  :hover {
    border: 1.22px solid var(--grey-0);
  }
  :focus {
    color: var(--grey-0);
  }
`;

export const SelectContainer = styled.section`
  display: flex;
  flex-direction: column;
  > span {
    margin-bottom: 6px;
    color: var(--grey-0);
    font-size: 9.77px;
    text-align: left;
    @media (min-width: 800px) {
      font-size: 12px;
    }
  }
`;
