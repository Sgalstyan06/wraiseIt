import React, { useState } from "react";
import Image from "next/image";
//images
import customerCover from "../../public/assets/images/aboutbg.png";
//styles
import * as Styled from "./styles";
//components
import Title from "../Title";
//data
import { servicesProcessData } from "./servicesCardData";
//constants
import { ColorSchemaModes } from "../../styles/variables";
import { minLaptopSize } from "../../constants/media";
import { useWindowDimensions } from "/utils/hooks";
//utils

const DevelopmentProcessSection = () => {
  const [hoveredProcess, setHoveredProcess] = useState(1);

  const { width } = useWindowDimensions();
  const isMobileSize = width < minLaptopSize;

  return (
    <Styled.SectionBackground>
      <Styled.BackgroundImage cover={customerCover} />
      <Styled.Container>
        <Styled.AnimatedSectionBlock>
          <Styled.DescriptionBlock>
            <Title variant={"h3"} mode={ColorSchemaModes.DARK}>
              PROCESS
            </Title>
            <Title variant={"h4"} mode={ColorSchemaModes.DARK}>
              Our web development process
            </Title>
            {isMobileSize ? (
              <Styled.MobileProcess>
                {servicesProcessData.map((process, key) => (
                  <Styled.MobileProcessTypeInfo key={key}>
                    <Title variant={"h3"} mode={ColorSchemaModes.LIGHT}>
                      {process.title}
                    </Title>
                    <Styled.ProcessDescription>
                      {process.description}
                    </Styled.ProcessDescription>
                    <Styled.MobileImageBlock>
                      <Image
                        src={process.image}
                        objectFit={"cover"}
                        alt={"cover"}
                      />
                    </Styled.MobileImageBlock>
                  </Styled.MobileProcessTypeInfo>
                ))}
              </Styled.MobileProcess>
            ) : (
              <Styled.Process>
                <Styled.ProcessTypeBlock>
                  {servicesProcessData.map((process, key) => (
                    <Styled.ProcessTypeInfo
                      key={key}
                      num={hoveredProcess}
                      onMouseOver={() => setHoveredProcess(key + 1)}
                    >
                      <Title variant={"h3"} mode={ColorSchemaModes.LIGHT}>
                        {process.title}
                      </Title>
                      <Styled.ProcessDescription>
                        {process.description}
                      </Styled.ProcessDescription>
                    </Styled.ProcessTypeInfo>
                  ))}
                </Styled.ProcessTypeBlock>
                <Styled.ProcessTypeBlock>
                  {servicesProcessData.map((data, key) => (
                    <Styled.AnimatedImageBlock
                      key={key}
                      num={hoveredProcess}
                      onMouseOver={() => setHoveredProcess(key + 1)}
                    >
                      <Image
                        src={data.image}
                        objectFit={"cover"}
                        alt={"cover"}
                      />
                    </Styled.AnimatedImageBlock>
                  ))}
                </Styled.ProcessTypeBlock>
              </Styled.Process>
            )}
          </Styled.DescriptionBlock>
        </Styled.AnimatedSectionBlock>
      </Styled.Container>
    </Styled.SectionBackground>
  );
};

export default DevelopmentProcessSection;
