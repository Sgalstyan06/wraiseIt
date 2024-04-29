import styled from "styled-components";
import {
  blackColor,
  ColorSchemaModes,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../styles/variables";
import { minTabletSize } from "../../constants/media";

export const H1 = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  text-transform: uppercase;
  color: ${(props) =>
    props.mode === ColorSchemaModes.LIGHT
      ? `${whiteColor}`
      : props.mode === ColorSchemaModes.DARK
      ? `${primaryColor}`
      : `${secondaryColor}`};
  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 22px;
  }
`;

export const H2 = styled.h2``;

export const H3 = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 16px;
  text-align: left;
  text-transform: uppercase;
  color: ${(props) =>
    props.mode === ColorSchemaModes.LIGHT
      ? `${whiteColor}`
      : props.mode === ColorSchemaModes.DARK
      ? `${primaryColor}`
      : `${secondaryColor}`};
  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 16px;
  }
`;

export const H4 = styled.h4`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 16px;
  color: ${(props) =>
    props.mode === ColorSchemaModes.DARK ? `${whiteColor}` : `${blackColor}`};
  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const H5 = styled.h5`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) =>
    props.mode === ColorSchemaModes.DARK ? `${whiteColor}` : `${blackColor}`};
  @media screen and (max-width: ${minTabletSize}px) {
  }
`;

export const H6 = styled.h6`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  margin: 16px 0;
  font-size: 18px;
  line-height: 20px;
  color: ${(props) =>
    props.mode === ColorSchemaModes.DARK ? `${whiteColor}` : `${blackColor}`};
  @media screen and (max-width: ${minTabletSize}px) {
  }
`;
