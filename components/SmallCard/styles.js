import styled from "styled-components";
import { blackColor, whiteColor } from "../../styles/variables";
import { minWEBSize, tabletSize } from "../../constants/media";

export const Card = styled.div`
  width: 170px;
  height: 170px;
  max-width: 173px;
  max-height: 173px;
  background: ${whiteColor};
  box-shadow: 0 4px 4px ${blackColor}41;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 16px;
  z-index: 2;
  padding: ${(props) => (!props.quantity ? "27px" : "10px 5px 8px")};
  flex-direction: column;
  span {
    margin-bottom: ${(props) => !!props.quantity && "5px !important"};
  }
  h3 {
    margin-bottom: 0;
  }
  @media screen and (max-width: ${minWEBSize}px) {
    align-items: center;
  }
  @media screen and (max-width: ${tabletSize}px) {
    padding: 14px;
    width: 120px;
    height: 120px;
    margin: 8px;
  }
`;

export const quantity = styled.div``;

export const AnimatedNumber = styled.div`
  span {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    text-align: center;

    /* grad */

    background: linear-gradient(133.58deg, #1dca9d -17.1%, #001d6b 115.52%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
`;
