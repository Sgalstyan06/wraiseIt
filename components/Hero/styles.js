import styled from "styled-components";
import { minLaptopSize, minTabletSize } from "../../constants/media";
import { whiteColor } from "../../styles/variables";
import { showAndMoveToTopKeyframe } from "../../styles/animations";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const Hero = styled.div`
  display: flex;
  position: relative;
  z-index: 1;
  font-family: "Inter", sans-serif;
  height: 100vh;
`;

export const Banner = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
`;

export const BannerBlock = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.7) 39.57%,
      rgba(0, 0, 0, 0) 104.1%
    ),
    rgba(196, 196, 196, 0.06);
  z-index: 0;
`;

export const HeroBlock = styled.div`
  position: relative;
  margin: auto 0;
  width: 100%;
`;

export const SloganBlock = styled.div`
  @media screen and (min-width: ${minLaptopSize}px) {
    animation-name: ${showAndMoveToTopKeyframe};
    animation-duration: 2s;
  }
`;

export const Title = styled.div`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 62px;
  color: ${whiteColor};
  max-width: 379px;
  margin-bottom: 16px;

  @media screen and (max-width: ${minTabletSize}px) {
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0;
    text-align: left;
    max-width: 237px;
  }
`;

export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.7);
  max-width: 481px;
  margin-bottom: 40px;
  @media screen and (max-width: ${minTabletSize}px) {
    max-width: 380px;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
`;
