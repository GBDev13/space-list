import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.65rem;
      color: ${({ theme }) => theme.purple};
    }
  }
`;

export const ListContainer = styled.section`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 0.5rem;

  > p {
    font-size: 0.8rem;
  }
`;
