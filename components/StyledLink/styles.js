import styled from "styled-components";
import {
  ColorSchemaModes,
  primaryColor,
  secondaryColor,
  whiteColor,
} from "../../styles/variables";
import Link from "next/link";

export const LearnMore = styled(Link)``;

export const LinkTo = styled.a`
  margin: 16px 0;
  color: ${primaryColor};
  cursor: pointer;
  transition: all 0.4s;

  svg {
    stroke: ${primaryColor};
    margin-left: 16px;
    transition: all 0.4s;
  }

  &:hover {
    color: ${(props) =>
      props.mode === ColorSchemaModes.DARK ? whiteColor : secondaryColor};
    svg {
      stroke: ${(props) =>
        props.mode === ColorSchemaModes.DARK ? whiteColor : secondaryColor};
    }
  }
`;
