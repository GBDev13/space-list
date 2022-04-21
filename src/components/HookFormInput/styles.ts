import styled from "styled-components";

export const Container = styled.div`
  p {
    color: ${({ theme }) => theme.red};
    font-size: 0.8rem;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
