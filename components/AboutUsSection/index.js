import * as Styled from "./styles";
import Image from "next/image";
//components
import Card from "../Card";
import Title from "../Title";
import StyledLink from "../StyledLink";
// images
import img from "/public/assets/images/weAreGoodSection.jpeg";
import { ABOUT_PATH, SERVICES_PATH } from "../../constants/paths";
import { COMPANY_NAME } from "../../constants/staticInfo";
import { WebIcon, QaTestingIcon, MobileIcon } from "../Icons";

const AboutUsSection = () => {
  return (
    <Styled.SectionBackground>
      <Styled.Container>
        <Styled.SectionBlock>
          <Styled.ImageBlock>
            <Image src={img} objectFit="fill" alt={`about ${COMPANY_NAME}`} />
          </Styled.ImageBlock>
          <Styled.DescriptionBlock>
            <Title variant={"h3"}>ABOUT US</Title>
            <Styled.Description>
              {`${COMPANY_NAME} is not a standard software development company or a
              bunch of people writing a code. It’s a team of friends, who are
              ready to put their soul and dedication into your project. We
              believe in dreams and will do everything so you get your dream
              projects done in a professional way absorbed with positive energy
              of our team. Each project is a piece of Art for us and we don’t
              write just codes, we make the code to talk your language.`}
            </Styled.Description>
            <StyledLink href={ABOUT_PATH}>Learn more</StyledLink>
          </Styled.DescriptionBlock>
        </Styled.SectionBlock>
        <Title variant={"h3"}>GET TO KNOW WHAT WE’RE GOOD at</Title>
        <Title variant={"h4"}>Our main areas of focus</Title>
        <Styled.AreaCards>
          {areCards.map((data, key) => (
            <Card
              key={key}
              data={data}
              mainIcon={data.mainIcon}
              title={data.title}
              description={data.description}
              href={data.href}
            />
          ))}
        </Styled.AreaCards>
      </Styled.Container>
    </Styled.SectionBackground>
  );
};

export default AboutUsSection;

const areCards = [
  {
    mainIcon: <MobileIcon />,
    title: "Web development",
    description:
      "Web-based software development services for companies that are ready to grow.",
    href: `${SERVICES_PATH}#web`,
  },
  {
    mainIcon: <WebIcon />,
    title: "Mobile development",
    description:
      "Mobile business custom applications that provide exceptional user experience.",
    href: `${SERVICES_PATH}#mobile`,
  },
  {
    mainIcon: <QaTestingIcon />,
    title: "QA & Testing",
    description:
      "Turn to our experts to perform multi-stage testing and auditing of your software.",
    href: `${SERVICES_PATH}#testing`,
  },
];
