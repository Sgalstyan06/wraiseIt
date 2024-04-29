import styled from "styled-components";
import { minTabletSize } from "../../constants/media";
import { blackColor, secondaryColor, whiteColor } from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
    margin: 0 auto 50px;
  }
`;

export const ServicesSectionBlock = styled.div`
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  @media screen and (max-width: ${minTabletSize}px) {
    padding: 100px 0 0;
  }
`;

export const SectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 32px 0 64px;
  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
  }
`;

export const ImageBlock = styled.div`
  width: 49%;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const DescriptionBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 33;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${blackColor}b3;
  margin-bottom: 16px;
  padding-right: 5px;
`;

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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

export const AnimatedSectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;
  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column-reverse;
    padding: 50px 0;
  }
`;

export const Process = styled.div`
  display: flex;
  justify-content: space-between;
  height: 600px;
`;

export const ProcessTypeBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(50% - 16px);
  height: 100%;
  justify-content: space-between;
  cursor: pointer;
`;

export const AnimatedImageBlock = styled.div`
  display: flex;
  width: 276px;
  height: 155px;
  transition: all 0.4s;
  cursor: pointer;

  &:nth-child(2) {
    margin-left: auto;
  }

  &:nth-child(${(props) => props.num}) {
    width: 379px;
    height: 213px;
  }

  &:hover {
    width: 379px;
    height: 213px;
  }
`;

export const ProcessTypeInfo = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.4s;
  opacity: 0.5;

  &:nth-child(${(props) => props.num}) {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

export const ProcessDescription = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${whiteColor}80;
  margin-bottom: 16px;
`;

export const MobileProcess = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MobileProcessTypeInfo = styled.div`
  margin-bottom: 32px;
`;

export const MobileImageBlock = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 400px;
`;
