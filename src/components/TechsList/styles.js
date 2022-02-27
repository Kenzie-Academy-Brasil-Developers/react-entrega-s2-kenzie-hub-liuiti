import styled from "styled-components";

export const ListContainer = styled.div`
  height: 40px;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  text-align-last: justify;

  @media (min-width: 800px) {
    width: 680px;
  }

  h1 {
    width: 80px;
    font-size: 14px;
    color: var(--grey-0);
    font-weight: bold;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 20px;
  }
  span {
    font-size: 12px;
    color: var(--grey-1);
  }
  :hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
    span {
      color: var(--grey-0);
    }
  }
`;
