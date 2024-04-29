// styles
import * as Styled from "./styles";

function Loader({ size }) {
  return (
    <Styled.LoaderBlock>
      <Styled.Load size={size} />
    </Styled.LoaderBlock>
  );
}

export default Loader;
