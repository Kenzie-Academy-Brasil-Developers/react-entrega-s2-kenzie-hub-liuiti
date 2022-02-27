import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(18, 18, 20, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;

export const Context = styled.div`
  width: 320px;
  height: 274.34px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 10px 16px;
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
  padding: 0px 16px;
  margin-top: 10px;
  width: 280px;
  height: 38.5px;
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
    margin-bottom: 5px;
    color: var(--grey-0);
    font-size: 9.77px;
    text-align: left;
  }
`;
