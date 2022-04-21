import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > div {
    border-bottom: 3px solid ${({ theme }) => theme.purple};
  }

  > p {
    font-size: 0.8rem;
  }
`;
