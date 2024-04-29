import styled from "styled-components";
import { minTabletSize } from "../../constants/media";
import { secondaryColor, whiteColor } from "../../styles/variables";

export const Footer = styled.div`
  position: relative;
  width: 100%;
  background: ${secondaryColor};
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

export const InnerFooter = styled.div`
  width: 100%;
  display: flex;
  padding: 132px 0 32px;
  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
    padding: 50px 0 16px;
  }
`;

export const LeftSide = styled.div`
  width: 50%;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  cursor: pointer;
  max-height: 80px;

  svg {
    width: max-content;
    height: 50px;
    margin: 10px 0;
    filter: brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(14%)
      hue-rotate(213deg) brightness(104%) contrast(104%);
  }
`;

export const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${whiteColor}b3;
  margin-bottom: 16px;
  letter-spacing: 0;
  @media screen and (max-width: ${minTabletSize}px) {
    margin-bottom: 0;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    align-items: flex-start;
  }
`;

export const ButtonContact = styled.div`
  line-height: 70px;
`;

export const SocialBlock = styled.div`
  display: flex;
  padding: 16px 0;
`;

export const Hr = styled.div`
  width: 100%;
  height: 1px;
  background: ${secondaryColor};
  box-shadow: inset 0 1px 0 ${whiteColor}b3;
`;

export const AllRights = styled.div`
  width: 100%;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${whiteColor}b3;
  letter-spacing: 0;
  padding: 16px 0;
`;
