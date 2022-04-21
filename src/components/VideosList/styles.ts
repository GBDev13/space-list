import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
