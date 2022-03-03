import logo from "../../assets/Logo.svg";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: var(--grey-4);
  overflow-y: scroll;
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
  margin-top: 20px;
  gap: 120px;
  > button {
    background-color: var(--grey-3);
    border-color: var(--grey-3);
    width: 70px;
    height: 20px;
    color: var(--grey-0);
    font-size: 12px;
  }
  @media (min-width: 800px) {
    gap: 190px;
  }
`;

export const Form = styled.form`
  height: 780px;
  width: 290px;
  text-align: center;
  margin-top: 22px;
  background-color: var(--grey-3);
  @media (min-width: 800px) {
    width: 360px;
    height: 830px;
  }
  
  > span {
    color: var(--grey-1);
    font-size: 12px;
    margin-top: 10px;
    gap: 50px;
    @media (min-width: 800px) {
      font-size: 15px;
    }
  }

  > h1 {
    color: var(--grey-0);
    font-size: 15px;
    margin-bottom: 10px;
    margin-top: 20px;
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
  width: 255px;
  @media (min-width: 800px) {
    width: 330px;
  }
  height: 34.5px;
  background: var(--grey-2);
  color: var(--grey-1);
  font-size: 11px;
  border: 1.22px solid var(--grey-4);
  border-radius: 4px;
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
