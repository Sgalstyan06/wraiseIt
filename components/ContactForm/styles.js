import styled from "styled-components";
import { minTabletSize, minWEBSize } from "../../constants/media";

import TextField from "@material-ui/core/TextField";

export const ContactSection = styled.div`
  width: 100%;
  position: relative;
`;
export const ScrollToContact = styled.div`
  position: absolute;
  top: -100px;
  @media screen and (max-width: ${minTabletSize}px) {
    top: -200px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const ContactBlock = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  height: 500px;
  z-index: 4;
  justify-content: space-between;
  @media screen and (max-width: ${minWEBSize}px) {
    height: 520px;
  }
  @media screen and (max-width: ${minTabletSize}px) {
    height: 720px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 50px 71px;
  position: absolute;
  bottom: -100px;
  z-index: 5;
  background: #ffffff;
  justify-content: space-between;

  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
    padding: 25px;
    bottom: -20px;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  width: calc(50% - 16px);
  height: 517px;
  position: relative;

  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    height: 277px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 55px;
  margin-bottom: 20px;

  span {
    font-size: 10px;
    margin-top: 4px;
  }
`;

export const Input = styled(TextField)``;

export const InputMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: ${(props) => (!props.hasDynamicHeight ? "32px" : "")};
  margin-top: 50px;

  span {
    font-size: 10px;
    margin-top: 4px;
  }

  & > .MuiFormLabel-root {
    padding-left: 10px;
    height: 50px;
  }

  label + .MuiInput-formControl {
    height: ${(props) => (!props.hasDynamicHeight ? "50px" : "")};
  }
`;

export const MessageBlock = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ButtonBlock = styled.div``;

export const LoaderBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
