import * as Styled from "./styles";
import Image from "next/image";
// images
import customerImage from "/public/assets/images/customerImage.jpeg";
import customerCover from "/public/assets/images/aboutbg.png";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const CustomersSection = () => {
  return (
    <Styled.SectionBackground>
      <Styled.BackgroundImage cover={customerCover} />
      <Styled.Container>
        <Styled.SectionBlock>
          <Styled.ImageBlock>
            <Image
              src={customerImage}
              objectFit="fill"
              alt={`customers of ${COMPANY_NAME}`}
            />
          </Styled.ImageBlock>
          <Styled.DescriptionBlock>
            <Styled.Title>WHY CHOOSE US</Styled.Title>
            <Styled.Heading>Why do customers choose us</Styled.Heading>
            <Styled.Description>
              {`${COMPANY_NAME} team is flexible to work the time zone you want,
              with ideas you generate and with requirements you have. Surely,
              during the process of developing your application or web page we are
              led by integrity and evolving a quality product.`}
            </Styled.Description>
          </Styled.DescriptionBlock>
        </Styled.SectionBlock>
      </Styled.Container>
    </Styled.SectionBackground>
  );
};

export default CustomersSection;
