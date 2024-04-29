import styled from "styled-components";
import {
  minLaptopSize,
  minTabletSize,
  mobileSize,
} from "../../constants/media";
import {
  blackColor,
  ColorSchemaModes,
  secondaryColor,
  whiteColor,
} from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const AboutUsDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  max-width: 700px;
  text-align: ${(props) =>
    props.mode === ColorSchemaModes.DARK || props.left ? "left" : "center"};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${(props) =>
    props.mode === ColorSchemaModes.DARK
      ? `${whiteColor}b3`
      : `${blackColor}b3`};
  margin-bottom: ${(props) =>
    props.mode === ColorSchemaModes.DARK ? "32px" : 0};
  margin-bottom: ${(props) => (props.left ? "16px" : 0)};
`;

export const MissionSectionBlock = styled.div`
  display: flex;
`;

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

export const SectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
    padding: 50px 0;
  }
`;

export const ImageBlock = styled.div`
  width: 49%;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 404px;
  min-width: 404px;

  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin: 16px auto 0;
  }

  @media screen and (max-width: ${mobileSize}px) {
    min-width: 300px;
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

export const SolutionSectionBlock = styled.div`
  padding: 100px 0 46px;
  @media screen and (max-width: ${minTabletSize}px) {
    padding: 50px 0 16px;
  }
`;

export const SolutionList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 32px 0;
`;

export const Solution = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3 - 22px);
  margin-right: 32px;
  margin-bottom: 32px;

  &:nth-child(3n) {
    margin-right: 0;
  }

  @media screen and (max-width: ${minLaptopSize}px) {
    width: calc(50% - 16px);
    margin-right: 32px;
    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-right: 0;
  }
`;
export const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const Num = styled.div`
  display: flex;
  justify-content: center;
  font-size: 44px;
  width: 50px;
  max-height: 55px;
  border-bottom: 3px solid ${secondaryColor};
  margin: 0 16px;
`;

export const CultureSection = styled.div`
  padding: 100px 0;
  @media screen and (max-width: ${minTabletSize}px) {
    padding: 50px 0 150px;
  }
`;

export const CultureSectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${minLaptopSize}px) {
    flex-direction: column;
  }
`;

export const CultureDescription = styled.div`
  width: calc(50% - 16px);
  @media screen and (max-width: ${minLaptopSize}px) {
    width: 100%;
    margin-bottom: 16px;
  }
`;

export const CultureImages = styled.div`
  width: calc(50% - 16px);
  height: 510px;
  position: relative;
  max-width: 500px;

  & > div:first-child {
    top: 0;
    left: 0;
  }

  & > div:last-child {
    bottom: 0;
    right: 0;
  }

  @media screen and (max-width: ${minLaptopSize}px) {
    width: 100%;
    margin: auto;
  }

  @media screen and (max-width: ${mobileSize}px) {
    height: 255px;
    & div {
      width: 230px;
      height: 133px;
    }
  }
`;

export const Image = styled.div`
  position: absolute;
  width: 350px;
  height: 268px;
  max-width: 350px;
  overflow: hidden;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
