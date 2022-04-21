import styled from "styled-components";

export const Container = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg:first-child {
    width: 5rem;
    height: 3rem;
  }

  svg:last-child {
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
      transform: scale(1.1);
      color: ${({ theme }) => theme.pink};
    }
  }
`;
