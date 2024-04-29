import Image from "next/image";
//styles
import * as Styled from "./styles";
//components
import Title from "../Title";
import Card from "../Card";
//images
import servicesImg from "../../public/assets/images/servicesImg.jpeg";
// data
import { servicesCardData } from "./servicesCardData";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const OurServices = () => (
  <Styled.Container>
    <Title variant={"h3"}>GET TO KNOW WHAT WE’RE GOOD AT</Title>
    <Title variant={"h4"}>Development process</Title>
    <Styled.SectionBlock>
      <Styled.DescriptionBlock>
        <Styled.Description>
          {`We leverage technology and ask the right questions to deliver
          reliable, sustainable software on time. We are flexible, we quickly
          adjust to clients’ needs and the situation on the market. All this
          with a focus on the highest quality of provided services. ${COMPANY_NAME}
          operates in industries like logistics transportation, healthcare,
          finance, nonprofits, construction and engineering, retail, e-commerce,
          sport and entertainment.`}
        </Styled.Description>
      </Styled.DescriptionBlock>
      <Styled.ImageBlock>
        <Image
          src={servicesImg}
          layout="intrinsic"
          objectFit="fill"
          alt={`development process in ${COMPANY_NAME}`}
        />
      </Styled.ImageBlock>
    </Styled.SectionBlock>
    <Styled.CardSection>
      {servicesCardData &&
        servicesCardData.map((data, key) => (
          <Card
            key={key}
            icon={data.mainIcon}
            title={data.title}
            href={data.href}
            name={data.name}
            description={data.description}
            size={data?.size}
            logoIcons={data?.logoIcons}
          />
        ))}
    </Styled.CardSection>
  </Styled.Container>
);

export default OurServices;
