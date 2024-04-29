import styled from "styled-components";
import { minTabletSize } from "/constants/media";
import {
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../styles/variables";

export const SectionBackground = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.cover.src});
  background-size: cover;
  background-position: center;
  background-color: ${secondaryColor};
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const SectionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding: 100px 0;
  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column-reverse;
    padding: 50px 0;
  }
`;

export const ImageBlock = styled.div`
  width: 49%;
  z-index: 1;
  position: relative;

  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export const DescriptionBlock = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
  }
`;
export const Title = styled.h3`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: ${primaryColor};
  margin-bottom: 16px;
  text-align: left;
  text-transform: uppercase;
  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 16px;
  }
`;
export const Heading = styled.h4`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 16px;
  color: ${whiteColor};
  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 24px;
    line-height: 34px;
  }
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${whiteColor}b3;
`;
