import { lighten } from "polished";
import styled, { css } from "styled-components";

interface InputContainerProps {
  isFocused: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.foreground};
  font-size: 0.8rem;
`;

export const InputContainer = styled.div<InputContainerProps>`
  background: ${({ theme }) => theme.currentLine};
  border: 2px solid ${({ theme }) => lighten(0.05, theme.currentLine)};
  padding: 0.3rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;
  gap: 0.8rem;
  transition: 0.4s;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    transition: 0.4s;
    color: ${({ theme }) => lighten(0.5, theme.currentLine)};
  }

  input {
    flex: 1;
    background: none;
    border: none;
    color: ${({ theme }) => theme.foreground};

    &::placeholder {
      color: ${({ theme }) => lighten(0.3, theme.currentLine)};
    }

    &:focus {
      outline: none;
    }
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: ${({ theme }) => theme.pink};

      svg {
        color: ${({ theme }) => theme.pink};
      }
    `}
`;
