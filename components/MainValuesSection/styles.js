import styled from "styled-components";
import {
  minLaptopSize,
  minTabletSize,
  minWEBSize,
  mobileSize,
} from "/constants/media";
import { blackColor } from "../../styles/variables";

export const SectionBackground = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const BackgroundImageContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px 10px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
    margin: 0 auto 80px;
  }
`;

export const SectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  align-items: center;
  @media screen and (max-width: ${minWEBSize}px) {
    flex-direction: column-reverse;
    padding: 50px 0 60px;
  }
`;

export const ImageBlock = styled.div`
  width: 49%;
  z-index: 1;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding: 100px 50px;
  justify-content: center;

  @media screen and (max-width: ${minWEBSize}px) {
    width: 55%;
    align-items: center;
    padding: 0;
  }
  @media screen and (max-width: ${minLaptopSize}px) {
    width: 77%;
  }
  @media screen and (max-width: ${minTabletSize}px) {
    width: 70%;
  }
  @media screen and (max-width: ${mobileSize}px) {
    width: 100%;
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

  @media screen and (max-width: ${minWEBSize}px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  margin-bottom: 16px;
  color: ${blackColor}b3;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
`;
