import styled from "styled-components";

import { ElementSize, ButtonStates } from "../../constants/components-types";
import { minWEBSize } from "../../constants/media";
import { primaryColor } from "../../styles/variables";

export const Button = styled.button`
  color: #ffffff;
  ${(props) =>
    props.size === ElementSize.SMALL
      ? `  padding: 10px 50px`
      : `  padding: 18px 37px`};
  outline: 0;
  text-transform: capitalize;
  margin-right: ${(props) => (props.size === ElementSize.SMALL ? `0` : `10px`)};
  cursor: pointer;
  border: 0;
  ${(props) =>
    props.buttonState === ButtonStates.TRANSPARENT
      ? `background-color: transparent;
           border: 1px solid white`
      : `background-color: ${primaryColor};
           border: 1px solid ${primaryColor}
      `};
  transition: ease background-color 250ms;
  outline: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${primaryColor};
    border-color: transparent;
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }

  @media screen and (max-width: ${minWEBSize}px) {
    min-width: 148px;
    padding: 18px;
    ${(props) =>
      props.size === ElementSize.SMALL
        ? `  padding: 10px 38px`
        : `  padding: 18px`};
  }
`;
