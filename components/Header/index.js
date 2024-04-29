import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
// styles
import * as Styled from "./styles";
// constants
import { CONTACT, HOME_PATH } from "../../constants/paths";
import { minLaptopSize } from "../../constants/media";
import { ElementSize, ButtonStates } from "../../constants/components-types";
//images
import { LogoIcon } from "../Icons";
//utils
import { isEmpty, lockScroll, unLockScroll } from "../../utils";
import { useWindowDimensions } from "/utils/hooks";
// data
import { headerData } from "./headerData";
//components
import Button from "../Button";

function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const { pathname } = useRouter();
  const { width } = useWindowDimensions();

  const isMobileSize = width < minLaptopSize;

  useEffect(() => {
    const listener = () =>
      window.scrollY > 70 ? setAnimateHeader(true) : setAnimateHeader(false);
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  useEffect(() => {
    if (!isMobileSize && mobileMenuIsOpen) {
      setMobileMenuIsOpen(!mobileMenuIsOpen);
    }
  }, [isMobileSize, mobileMenuIsOpen]);

  useEffect(() => {
    mobileMenuIsOpen ? lockScroll() : unLockScroll();
  }, [mobileMenuIsOpen]);

  const openMobileMenu = () => {
    setMobileMenuIsOpen(!mobileMenuIsOpen);
  };

  return (
    <Styled.Header
      animateHeader={animateHeader}
      mobileMenuIsOpen={mobileMenuIsOpen}
    >
      <Styled.Container>
        <Styled.LogoBlock
          animateHeader={animateHeader}
          mobileMenuIsOpen={mobileMenuIsOpen}
        >
          <Link href={HOME_PATH}>
            <a>
              <LogoIcon />
            </a>
          </Link>
        </Styled.LogoBlock>
        {isMobileSize && (
          <Styled.MobileMenu
            animateHeader={animateHeader}
            mobileMenuIsOpen={mobileMenuIsOpen}
            onClick={openMobileMenu}
          >
            <Styled.Line />
            <Styled.Line />
            <Styled.Line />
          </Styled.MobileMenu>
        )}
        <Styled.NavBlock
          isMobileSize={isMobileSize}
          mobileMenuIsOpen={mobileMenuIsOpen}
        >
          {!isEmpty(headerData) &&
            headerData.map((link, key) => (
              <Styled.List
                key={key}
                animateHeader={animateHeader}
                mobileMenuIsOpen={mobileMenuIsOpen}
                active={pathname === link.path}
              >
                <Link href={link.path}>
                  <a>{link.name}</a>
                </Link>
              </Styled.List>
            ))}
          <Link href={`#${CONTACT}`} passHref>
            <Styled.ContactUs>
              <Button
                size={ElementSize.SMALL}
                buttonState={
                  animateHeader || mobileMenuIsOpen
                    ? ButtonStates.LINK
                    : ButtonStates.TRANSPARENT
                }
                onClick={
                  mobileMenuIsOpen ? () => setMobileMenuIsOpen(false) : null
                }
              >
                Contact us
              </Button>
            </Styled.ContactUs>
          </Link>
        </Styled.NavBlock>
      </Styled.Container>
    </Styled.Header>
  );
}

export default Header;
