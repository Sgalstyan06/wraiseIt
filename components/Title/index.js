import React from "react";
import PropTypes from "prop-types";
//styles
import { H1, H2, H3, H4, H5, H6 } from "./styles";

const Title = ({ children, variant, mode }) => {
  let HeadingComponent;
  switch (variant) {
    case "h1": {
      HeadingComponent = H1;
      break;
    }
    case "h2": {
      HeadingComponent = H2;
      break;
    }
    case "h3": {
      HeadingComponent = H3;
      break;
    }
    case "h4": {
      HeadingComponent = H4;
      break;
    }
    case "h5": {
      HeadingComponent = H5;
      break;
    }
    case "h6": {
      HeadingComponent = H6;
      break;
    }
    default: {
      HeadingComponent = H1;
    }
  }
  return <HeadingComponent mode={mode}>{children}</HeadingComponent>;
};

export default Title;

Title.propTypes = {
  variant: PropTypes.string.isRequired,
  mode: PropTypes.string,
};
