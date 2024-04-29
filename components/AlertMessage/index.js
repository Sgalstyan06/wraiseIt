import PropTypes from "prop-types";

import { AlertTypes } from "../../constants/messages";
import * as Styled from "./styles";

const AlertMessage = ({ alertType, message }) => {
  return <Styled.Message alertType={alertType}>{message}</Styled.Message>;
};

export default AlertMessage;

AlertMessage.propTypes = {
  alertType: PropTypes.oneOf([
    AlertTypes.ERROR,
    AlertTypes.INFO,
    AlertTypes.SUCCESS,
  ]),
  message: PropTypes.string.isRequired,
};
