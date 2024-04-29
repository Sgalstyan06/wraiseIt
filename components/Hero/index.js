import React from "react";
import Image from "next/image";
//images
import Banner from "../../public/assets/images/banner.jpeg";
//styles
import * as Styled from "../Hero/styles";
import PropTypes from "prop-types";

const Hero = ({ img, children, alt }) => {
  return (
    <Styled.Hero>
      <Styled.Banner>
        <Image
          quality={50}
          src={img || Banner}
          layout="fill"
          objectFit="cover"
          alt={alt}
        />
        <Styled.BannerBlock />
        <Styled.HeroBlock>
          <Styled.Container>{children}</Styled.Container>
        </Styled.HeroBlock>
      </Styled.Banner>
    </Styled.Hero>
  );
};

Hero.propTypes = {
  children: PropTypes.element,
};

export default Hero;
