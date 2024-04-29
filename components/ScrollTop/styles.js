import styled from "styled-components";
import { minTabletSize } from "../../constants/media";
import { blackColor, primaryColor, whiteColor } from "../../styles/variables";

export const ScrollTop = styled.div`
  display: ${(props) => (props.isScrolled ? "flex" : "none")};
  position: fixed;
  transition: all 0.4s;
  bottom: 120px;
  right: 35px;
  z-index: 98;
  width: 68px;
  height: 68px;
  background: ${primaryColor};
  box-shadow: 0 4px 4px ${blackColor}40;
  border: 2px solid ${primaryColor};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.animateHeader ? `${whiteColor}` : "")};
  cursor: pointer;

  @media screen and (max-width: ${minTabletSize}px) {
    bottom: 40px;
    right: 10px;
    width: 58px;
    height: 58px;
  }

  &:hover {
    background-color: white;

    svg path {
      stroke: ${primaryColor};
    }
  }
`;
