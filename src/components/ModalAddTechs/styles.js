import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3.21px 32.09px rgba(0, 0, 0, 0.25);
  top: 0;
  left: 0;
`;

export const Context = styled.div`
  width: 285px;
  height: 274.34px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  position: relative;
  z-index: 10;
  border-radius: 3.2px;
  bottom: 130px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 10px 16px;
  background-color: var(--grey-2);
  > h1 {
    font-size: 14px;
  }
  > button {
    color: var(--grey-1);
    background-color: var(--grey-2);
    border: none;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 10px 16px;
  > label {
    color: var(--grey-0);
  }
  > input {
    color-scheme: dark;
    color: var(--grey-0);
    background: var(--grey-2);
    border-radius: 4px;
    border: 1.22px solid var(--grey-2);
    display: flex;
    flex-direction: column;
    transition: 0.4s;
    padding: 0px 16px;
    :hover {
      border: 1.22px solid var(--grey-0);
    }
    width: 255px;
    height: 34.5px;
    margin-top: 10px;
    &::placeholder {
      color: var(--grey-1);
      font-size: 14px;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

export const Select = styled.select`
  display: flex;
  flex-direction: row;
  align-content: center;
  background: var(--grey-2);
  color: var(--grey-1);
  font-size: 14px;
  border: 1.22px solid var(--grey-4);
  border-radius: 4px;
  padding: 0px 16px;
  margin-top: 10px;
  width: 255px;
  height: 34.5px;
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

export const ContainerSelect = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 5px;

  > span {
    margin-top: 10px;
    color: var(--grey-0);
    font-size: 14px;
    text-align: left;
  }
`;
