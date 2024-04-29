import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
//styles
import * as Styled from "./styles";
//components
import Title from "../Title";
//constants
import { ColorSchemaModes } from "../../styles/variables";

const SmallCard = ({ src, title, quantity, visible }) => {
  const [started, setStarted] = useState(null);

  useEffect(() => {
    if (visible) {
      setStarted(true);
    }
  }, [visible]);

  return (
    <Styled.Card quantity={quantity}>
      {src}
      {quantity && (
        <Styled.quantity>
          {started && (
            <CountUp start={0} end={quantity} delay={0} duration={1}>
              {({ countUpRef }) => (
                <Styled.AnimatedNumber>
                  <span ref={countUpRef} />
                  <span>+</span>
                </Styled.AnimatedNumber>
              )}
            </CountUp>
          )}
        </Styled.quantity>
      )}
      <Title variant={"h3"} mode={ColorSchemaModes.DARK}>
        {title}
      </Title>
    </Styled.Card>
  );
};

export default SmallCard;
