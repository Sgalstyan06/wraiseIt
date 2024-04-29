import styled from "styled-components";
import { minLaptopSize, minTabletSize } from "../../constants/media";
import { blackColor, transparent, whiteColor } from "../../styles/variables";

export const Header = styled.div`
  display: flex;
  width: 100%;
  transition: all 0.4s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${(props) =>
    props.animateHeader || props.mobileMenuIsOpen ? `${whiteColor}` : ""};
  border-bottom: 1px solid
    ${(props) =>
      props.mobileMenuIsOpen ? `${blackColor}1c` : `${transparent}`};
  height: 70px;
  z-index: 99;
  box-shadow: ${(props) =>
    props.animateHeader || props.mobileMenuIsOpen
      ? `0 3px 5px rgba(57, 63, 72, 0.3)`
      : ""};

  li {
    a {
      color: ${(props) =>
        props.animateHeader || props.mobileMenuIsOpen ? "#000000" : ""};
    }
  }

  @media screen and (max-width: ${minTabletSize}px) {
    height: 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1366px;
  padding: 21px 120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: ${minTabletSize}px) {
    padding: 21px 24px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  cursor: pointer;
  max-height: 70px;

  svg {
    width: max-content;
    height: 50px;
    margin: 10px 0;
    filter: ${(props) =>
      props.animateHeader || props.mobileMenuIsOpen
        ? ""
        : `brightness(0) saturate(100%) invert(95%) sepia(100%) saturate(14%) hue-rotate(213deg) brightness(104%) contrast(104%);`};
  }
`;

export const NavBlock = styled.ul`
  display: flex;
  height: 38px;
  z-index: 1;
  transition: all 0.4s;
  overflow: hidden;
  right: ${(props) => (props.mobileMenuIsOpen ? "0" : "-100%")};
  ${(props) =>
    props.isMobileSize
      ? `
    flex-direction: column;
    position: absolute;
    top: 70px;
    width: 100%;
    height: calc(100vh - 70px);
    background: ${whiteColor};
  `
      : ""};
`;

export const List = styled.li`
  display: flex;
  justify-content: center;
  text-decoration: none;
  list-style-type: none;
  padding: 10px 0;
  cursor: pointer;
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  transition: text-shadow 0.3s;
  margin-right: ${(props) => (props.mobileMenuIsOpen ? `0` : "40px")};
  white-space: nowrap;

  &:nth-child(n + 4) {
    margin-right: ${(props) => (props.mobileMenuIsOpen ? `0` : "135px")};
    @media screen and (max-width: ${minLaptopSize}px) {
      margin-right: ${(props) => (props.mobileMenuIsOpen ? `0` : "40px")};
    }
  }

  a {
    color: ${whiteColor};
    transition: color 0.2s ease-in-out;
    font-weight: ${(props) => (props.active ? "bold" : 400)};
    letter-spacing: 0.5px;
  }

  &:hover {
    font-weight: bold;
  }
`;

export const MobileMenu = styled.div`
  width: 35px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 9px;
  position: absolute;
  top: 27px;
  right: 120px;
  z-index: 99;
  transition: all 0.4s;

  @media screen and (max-width: ${minTabletSize}px) {
    right: 20px;
  }

  span {
    position: absolute;
    width: 22px;
    transition: all 0.4s;
  }

  span:nth-child(1) {
    top: 0;
    ${(props) =>
      props.mobileMenuIsOpen
        ? `
    top: 7px;
    transform: rotate(45deg);
    `
        : ``};
  }

  span:nth-child(2) {
    top: 8px;
    opacity: ${(props) => (props.mobileMenuIsOpen ? 0 : 1)};
  }

  span:nth-child(3) {
    top: 16px;
    ${(props) =>
      props.mobileMenuIsOpen
        ? `
    top: 7px;
    transform: rotate(-45deg);
    `
        : ``};
  }

  span {
    background: ${(props) =>
      props.animateHeader || props.mobileMenuIsOpen
        ? `${blackColor}`
        : `${whiteColor}`};
  }
`;

export const Line = styled.span`
  height: 2px;
  width: 17.6px;
`;

export const ContactUs = styled.a`
  margin: 0 auto;
`;
