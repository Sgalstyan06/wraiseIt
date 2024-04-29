import styled from "styled-components";
import { secondaryColor, whiteColor } from "../../styles/variables";

export const SocialBlock = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${whiteColor};
  margin-right: 16px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease-in-out;

  a {
    width: 18px;
    display: flex;
  }

  &:hover {
    background-color: white;

    svg path {
      fill: ${secondaryColor} !important;
    }
  }
`;
