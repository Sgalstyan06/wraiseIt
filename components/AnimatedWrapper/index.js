import React from "react";
import { useRef } from "react";
import * as styled from "./styles";
import { useOnScreen } from "../../utils/hooks";

export default function AnimatedWrapper({ children }) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, "-10px", true);

  return (
    <styled.FadeAnimated onScreen={onScreen} ref={ref}>
      {children}
    </styled.FadeAnimated>
  );
}
