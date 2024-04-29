import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../styles/variables";
import { rotate } from "../../styles/animations";
import { ElementSize } from "../../constants/components-types";

export const LoaderBlock = styled.div`
  display: flex;
  align-items: center;
`;
export const Load = styled.div`
  width: ${(props) => (props.size === ElementSize.SMALL ? `30px` : "80px")};
  height: ${(props) => (props.size === ElementSize.SMALL ? `30px` : "80px")};

  &:after {
    content: " ";
    display: block;
    width: ${(props) => (props.size === ElementSize.SMALL ? `15px` : "40px")};
    height: ${(props) => (props.size === ElementSize.SMALL ? `15px` : "40px")};
    margin: ${(props) => (props.size === ElementSize.SMALL ? `0` : "8px")};
    border-radius: 50%;
    border: ${(props) => (props.size === ElementSize.SMALL ? `3px` : "6px")}
      solid ${secondaryColor};
    border-color: ${primaryColor} transparent ${primaryColor} transparent;
    animation: ${rotate} 0.8s linear infinite;
  }
`;
