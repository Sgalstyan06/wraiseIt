import styled from "styled-components";
import {
  primaryColor,
  whiteColor,
  descriptionColor,
} from "../../styles/variables";
import { minLaptopSize } from "../../constants/media";

export const CardBlock = styled.span`
  position: relative;
  width: ${(props) =>
    props.size === "big" ? "calc(50% - 16px)" : "calc(100% / 3 - 22px)"};
  margin-bottom: 32px;
  padding: 30px 22px;
  border-width: 2px;
  border-style: solid;
  box-shadow: 0 4px 4px 0 #00000040;
  border-image: linear-gradient(
      to left top,
      ${primaryColor} 0%,
      ${whiteColor} 100px,
      #fff 50%,
      #fff calc(100% - 100px),
      ${primaryColor} 100%
    )
    10;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${minLaptopSize}px) {
    width: 100%;
  }
`;

export const CardMainBlock = styled.div`
  position: absolute;
  top: -75px;
`;

export const LinkToCards = styled.div``;

export const Icon = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  margin-bottom: 16px;
`;

export const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: ${descriptionColor};
`;

export const LogoBlock = styled.div`
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 16px 0;
  justify-content: center;
`;

export const Logo = styled.div`
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
