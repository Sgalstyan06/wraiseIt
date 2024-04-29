//styles
import * as Styled from "./styles";
//components
import StyledLink from "../StyledLink";

const Card = ({ icon, title, description, href, name, size, logoIcons }) => {
  return (
    <>
      <Styled.CardBlock size={size}>
        {name && (
          <Styled.CardMainBlock>
            <Styled.LinkToCards id={name} />
          </Styled.CardMainBlock>
        )}
        <Styled.Icon>{icon}</Styled.Icon>
        <Styled.Title>{title}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        {href && (
          <StyledLink href={href} passHref>
            Learn more
          </StyledLink>
        )}
        {/* {logoIcons && (
          <Styled.LogoBlock>
            {logoIcons.map((icon, key) => (
              <Styled.Logo key={key}>{icon.src}</Styled.Logo>
            ))}
          </Styled.LogoBlock>
        )} */}
      </Styled.CardBlock>
    </>
  );
};

export default Card;
