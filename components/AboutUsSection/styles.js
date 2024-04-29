import styled from "styled-components";
import { minTabletSize, minLaptopSize } from "/constants/media";
import { blackColor } from "../../styles/variables";

export const SectionBackground = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }

  @media screen and (max-width: ${minLaptopSize}px) {
    padding: 0 30px;
  }
`;

export const SectionBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 100px 0;

  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
  }
`;

export const ImageBlock = styled.div`
  width: 49%;
  position: relative;

  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-bottom: 32px;
  }
`;

export const DescriptionBlock = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
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
`;

export const AreaCards = styled.a`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 44px 0;
  justify-content: space-between;
`;
