import { lighten } from "polished";
import styled, { css } from "styled-components";
import { Title } from "../../components/Title";

export const Container = styled.main`
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  overflow-y: auto;

  > svg {
    width: 8rem;
  }
`;

export const PageTitle = styled(Title)`
  font-size: 1.5rem;
  margin-left: 1.2rem;
  align-self: flex-start;

  &::before {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 0.2rem;
    left: -1.2rem;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface ButtonProps {
  outlined?: boolean;
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.foreground};
  border: none;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => lighten(0.07, theme.pink)};
  }

  ${({ outlined }) =>
    outlined &&
    css`
      background: none;
      border: 2px solid ${({ theme }) => theme.pink};
      color: ${({ theme }) => theme.pink};

      &:hover {
        background: ${({ theme }) => theme.pink};
        border-color: ${({ theme }) => theme.pink};
        color: ${({ theme }) => theme.foreground};
      }
    `}
`;

export const OrContainer = styled.section`
  width: 100%;
  margin: 1rem 0;

  div {
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.currentLine};
    position: relative;
    left: 0;
    top: 50%;
    z-index: 1;
    transform: translateY(-50%);
  }

  p {
    font-size: 0.9rem;
    text-transform: uppercase;
    background: ${({ theme }) => theme.background};
    position: absolute;
    z-index: 2;
    padding: 0 1rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
