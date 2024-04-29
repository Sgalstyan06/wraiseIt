import styled from "styled-components";
import { minTabletSize } from "../../constants/media";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const JobDueTo = styled.i`
  font-size: 12px;
  margin-bottom: 16px;
  color: grey;
`;

export const JobPage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 0;

  h2 {
    margin-bottom: 16px;
  }

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 100px 0 160px;
  }
`;

export const Description = styled.div``;
export const SendCvText = styled.div`
  margin: 32px 0;
`;
export const Email = styled.a`
  text-decoration: underline;
  margin-left: 5px;
`;
