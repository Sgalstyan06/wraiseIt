//styles
import * as Styled from "./styles";
//components
import Title from "../../components/Title";
//constants
import { COMPANY_NAME } from "../../constants/staticInfo";

const AboutUsDescription = () => (
  <Styled.Container>
    <Styled.AboutUsDescriptionSection>
      <Title variant={"h3"}>ABOUT US</Title>
      <Styled.Description>
        {`${COMPANY_NAME} is not a standard software development company or a bunch
        of people writing a code. It’s a team of friends, who are ready to put
        their soul and dedication into your project. We believe in dreams and
        will do everything so you get your dream projects done in a professional
        way absorbed with positive energy of our team. Each project is a piece
        of Art for us and we don’t write just codes, we make the code to talk
        your language.`}
      </Styled.Description>
    </Styled.AboutUsDescriptionSection>
  </Styled.Container>
);

export default AboutUsDescription;
