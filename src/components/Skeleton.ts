import { lighten } from "polished";
import styled, { keyframes } from "styled-components";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div`
  display: inline-block;
  min-height: 4rem;
  width: 100%;
  animation: ${skeletonKeyframes} 1330ms ease-in-out infinite;
  background-color: ${({ theme }) => theme.currentLine};
  background-image: ${({ theme }) => `linear-gradient(
    90deg,
    ${theme.currentLine},
    ${lighten(0.2, theme.currentLine)},
    ${theme.currentLine}
  )`};
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: 0.3rem;
`;
