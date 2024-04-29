import React from "react";
import PropTypes from "prop-types";
//styles
import * as Styled from "./styles";
//constants
import { ElementSize, ButtonStates } from "../../constants/components-types";

const Button = ({ children, onClick, ...props }) => {
  return (
    <Styled.Button
      buttonState={props?.buttonState}
      size={props?.size}
      onClick={onClick}
      {...props}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;

Button.propTypes = {
  buttonState: PropTypes.oneOf([ButtonStates.TRANSPARENT, ButtonStates.LINK]),
  size: PropTypes.oneOf([ElementSize.SMALL, ElementSize.BIG]),
};
