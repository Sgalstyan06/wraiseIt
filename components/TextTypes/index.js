//constants
import { TEXT_TYPES } from "../CareersSection/constants";
//components
import Title from "../Title";
//styles
import * as Styled from "./styles";

const TextTypes = ({ textObject }) => (
  <>
    {textObject.type === TEXT_TYPES.TITLE && (
      <Title variant={"h6"}>{textObject.content}</Title>
    )}
    {textObject.type === TEXT_TYPES.TEXT && (
      <Styled.Description>{textObject.content}</Styled.Description>
    )}
    {textObject.type === TEXT_TYPES.ITALIC && (
      <Styled.ItalicDescription>{textObject.content}</Styled.ItalicDescription>
    )}
    {textObject.type === TEXT_TYPES.BULLETS && (
      <Styled.BulletsBlock>
        {textObject.content.map((content, key) => (
          <Styled.BulletsList key={key}>
            <TextTypes textObject={content} />
          </Styled.BulletsList>
        ))}
      </Styled.BulletsBlock>
    )}
  </>
);

export default TextTypes;
