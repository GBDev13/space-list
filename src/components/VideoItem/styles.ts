import { rgba } from "polished";
import styled from "styled-components";

interface ThumbProps {
  imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  min-height: 4rem;
  background: ${({ theme }) => theme.currentLine};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;
  overflow: hidden;
  transition: 0.4s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Thumb = styled.div<ThumbProps>`
  border-radius: 0.3rem;
  min-width: 5rem;
  height: 100%;
  background: ${({ theme, imgUrl }) =>
    `linear-gradient(0deg, ${rgba(theme.pink, 0.6)} 0%, ${rgba(
      theme.pink,
      0
    )} 100%), url(${imgUrl}) no-repeat center`};
  background-size: cover;
`;

export const Details = styled.section`
  overflow: hidden;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex: 1;

  strong {
    display: block;
    font-size: 0.7rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;

    span {
      font-size: 0.7rem;
      color: ${({ theme }) => theme.cyan};
      display: flex;
      align-items: center;
      gap: 0.2rem;
    }

    > svg {
      cursor: pointer;
      transition: 0.4s;

      &:hover {
        color: ${({ theme }) => theme.purple};
      }
    }
  }
`;

export const Button = styled.button`
  font-size: 0.6rem;
  font-weight: 500;
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.foreground};
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  transition: 0.4s;
  display: flex;
  align-items: center;
  gap: 0.2rem;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.purple};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
