import styled, { css } from "styled-components";
import { errorColor, infoColor, successColor } from "../../styles/variables";
import { AlertTypes } from "../../constants/messages";

export const Message = styled.span`
  font-size: 14px;
  transition: all 0.8s;
  ${(props) => {
    switch (props.alertType) {
      case AlertTypes.SUCCESS:
        return css`
          color: ${successColor};
        `;
      case AlertTypes.ERROR:
        return css`
          color: ${errorColor};
        `;
      case AlertTypes.INFO:
        return css`
          color: ${infoColor};
        `;
      default:
        return;
    }
  }}
`;
