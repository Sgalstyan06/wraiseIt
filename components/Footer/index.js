import React from "react";
import Link from "next/link";
//styles
import * as Styled from "./styles";
//constants
import { CONTACT, HOME_PATH } from "../../constants/paths";
//components
import SocialLinks from "../SocialLink";
import { LogoIcon } from "../Icons";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const Footer = () => (
  <Styled.Footer>
    <Styled.Container>
      <Styled.InnerFooter>
        <Styled.LeftSide>
          <Styled.LogoBlock>
            <Link href={HOME_PATH}>
              <a>
                <LogoIcon />
              </a>
            </Link>
          </Styled.LogoBlock>
          <Styled.Description>
            We are experts in making your dreams come true!
          </Styled.Description>
        </Styled.LeftSide>
        <Styled.RightSide>
          <Styled.SocialBlock>
            {/* TODO */}
            {/* <SocialLinks /> */}
          </Styled.SocialBlock>
        </Styled.RightSide>
      </Styled.InnerFooter>
    </Styled.Container>
    <Styled.Hr />
    <Styled.Container>
      <Styled.AllRights>
        <Styled.Description>
          &copy; 2022 {COMPANY_NAME}. All Rights Reserved
        </Styled.Description>
      </Styled.AllRights>
    </Styled.Container>
  </Styled.Footer>
);

export default Footer;
