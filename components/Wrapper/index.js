import dynamic from "next/dynamic";
import * as Styled from "./styles";
import ScrollTop from "../ScrollTop";

const Header = dynamic(() => import("/components/Header"), {
  loading: () => <p>...</p>,
});
const Footer = dynamic(() => import("/components/Footer"));

function Wrapper({ children }) {
  return (
    <Styled.WrapperBlock>
      <Header />
      {children}
      <Footer />
      <ScrollTop />
    </Styled.WrapperBlock>
  );
}

export default Wrapper;
