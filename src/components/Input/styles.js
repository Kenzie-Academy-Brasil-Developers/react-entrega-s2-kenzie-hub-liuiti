import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: left;
  color: var(--grey-0);
  font-size: 9.77px;
  @media (min-width: 800px) {
    font-size: 12px;
  }
  > div {
    margin-top: 7px;
    span {
      color: var(--color-primary);
    }
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
    @media (min-width: 800px) {
      width: 330px;
    }
    width: 280px;
    height: 38.5px;
    margin-top: 10px;
    &::placeholder {
      color: var(--grey-1);
      font-size: 13px;
    }
  }
`;
