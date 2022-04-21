import styled from "styled-components";

export const Title = styled.h3`
  position: relative;
  margin-left: 0.8rem;
  font-size: 0.85rem;

  &::before {
    content: "";
    position: absolute;
    left: -0.8rem;
    top: 50%;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.purple};
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.1rem;
  }
`;
