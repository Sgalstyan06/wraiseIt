import { keyframes } from "styled-components";

export const showAndMoveToTopKeyframe = keyframes`
  0% {
    margin-top: 60px;
    opacity: 0
  }
  100% {
    margin-top: 0;
    opacity: 1;
  }
`;

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;
