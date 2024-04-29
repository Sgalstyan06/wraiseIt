import * as Styled from "./styles";
import Image from "next/image";
// images
import mainValuesCover from "/public/assets/images/mainValuesbg.png";
//components
import Title from "../Title";
import SmallCard from "../SmallCard";
//images
import { HeadsetIcon, KeyIcon, QuestionIcon, RectangleIcon } from "./icons";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const images = [
  {
    title: "Security",
    icon: <RectangleIcon />,
  },
  {
    title: "Quality",
    icon: <KeyIcon />,
  },
  {
    title: "Responsible",
    icon: <HeadsetIcon />,
  },
  {
    title: "Speed",
    icon: <QuestionIcon />,
  },
];

const MainValuesSection = () => {
  return (
    <Styled.SectionBackground>
      <Styled.BackgroundImageContainer>
        <Image
          quality={30}
          objectFit="cover"
          layout="fill"
          alt={`Main values of ${COMPANY_NAME}`}
          src={mainValuesCover}
        />
      </Styled.BackgroundImageContainer>
      <Styled.Container>
        <Styled.SectionBlock>
          <Styled.ImageBlock>
            {images.map((src, key) => (
              <SmallCard key={key} src={src.icon} title={src.title} />
            ))}
          </Styled.ImageBlock>
          <Styled.DescriptionBlock>
            <Title variant={"h4"}>Our main values</Title>
            <Styled.Description>
              Our greatest value is our reputation. As a young team we are now
              on the stage, when we need to build our reputation. This means
              that each your proposal or complaint will be handled with care and
              we are ready to go extra mile to meet your needs and exceed your
              expectations. Once we are entrusted your project you will see the
              power of our dedication and the capability of our Code.
            </Styled.Description>
          </Styled.DescriptionBlock>
        </Styled.SectionBlock>
      </Styled.Container>
    </Styled.SectionBackground>
  );
};

export default MainValuesSection;
