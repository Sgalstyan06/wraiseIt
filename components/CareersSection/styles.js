import styled from "styled-components";
import { minTabletSize } from "../../constants/media";
import { blackColor, transparent } from "../../styles/variables";

export const Container = styled.div`
  width: 100%;
  max-width: 1366px;
  padding: 0 120px;
  margin: 0 auto;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 0 24px;
  }
`;

export const Careers = styled.div`
  padding: 100px 0;

  @media screen and (max-width: ${minTabletSize}px) {
    padding: 50px 0;
  }
`;

export const CareersBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 44px;

  @media screen and (max-width: ${minTabletSize}px) {
    flex-direction: column;
    margin: 32px 0 120px;
  }
`;

export const VacanciesBlock = styled.div`
  width: calc(60% - 16px);
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
  }
`;

export const BenefitsBlock = styled.div`
  width: calc(40% - 16px);
  margin-top: 60px;
  @media screen and (max-width: ${minTabletSize}px) {
    width: 100%;
    margin-top: 16px;
  }
`;

export const BenefitsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BenefitsDesc = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  svg {
    margin-right: 13px;
    min-width: 18px;
  }
`;

export const SwitchBlock = styled.div`
  display: flex;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 16px;
`;

export const Switcher = styled.div`
  cursor: pointer;
  text-shadow: 0 0 1px
    ${(props) => (props.active ? `${blackColor}b3` : transparent)};
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-size: 16px;
  line-height: 28px;
  color: ${blackColor}b3;
  margin-right: 40px;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`;

export const AccordionBlock = styled.div``;

export const Description = styled.div`
  margin: 16px 0;
  width: 90%;
`;
