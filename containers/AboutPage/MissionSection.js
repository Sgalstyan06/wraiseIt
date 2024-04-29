import { useEffect, useRef, useState } from "react";
//components
import Title from "../../components/Title";
import SmallCard from "../../components/SmallCard";
//styles
import * as Styled from "./styles";
//images
import customerCover from "../../public/assets/images/aboutbg.png";
//constants
import { ColorSchemaModes } from "../../styles/variables";
import { aboutCards } from "./constants";
import { useOnScreen } from "../../utils/hooks";
import { COMPANY_NAME } from "../../constants/staticInfo";
//utils

const MissionSection = () => {
  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <Styled.MissionSectionBlock>
      <Styled.SectionBackground>
        <Styled.BackgroundImage cover={customerCover} />
        <Styled.Container>
          <Styled.SectionBlock>
            <Styled.DescriptionBlock>
              <Title variant={"h3"} mode={ColorSchemaModes.DARK}>
                {COMPANY_NAME.toUpperCase()}S’S VISION
              </Title>
              <Title variant={"h4"} mode={ColorSchemaModes.DARK}>
                Our mission and vision
              </Title>
              <Styled.Description mode={ColorSchemaModes.DARK}>
                Your ideas deserve to live and we are here to give them visual
                face to reach out other people through the web or mobile
                applications and make your ideas real.
              </Styled.Description>
            </Styled.DescriptionBlock>
            <Styled.ImageBlock ref={ref}>
              {aboutCards.map((src, key) => (
                <SmallCard
                  key={key}
                  src={src.icon}
                  title={src.title}
                  quantity={src.quantity}
                  visible={visible}
                />
              ))}
            </Styled.ImageBlock>
          </Styled.SectionBlock>
        </Styled.Container>
      </Styled.SectionBackground>
    </Styled.MissionSectionBlock>
  );
};

export default MissionSection;
