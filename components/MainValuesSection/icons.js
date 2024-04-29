import Image from "next/image";
import { ImageWrapper } from "./styles";
import { COMPANY_NAME } from "../../constants/staticInfo";

export const RectangleIcon = () => (
  <ImageWrapper>
    <Image
      src="/assets/icons/security.png"
      alt={`${COMPANY_NAME} security`}
      layout="responsive"
      objectFit="contain"
      width={"100%"}
      height={"100%"}
    />
  </ImageWrapper>
);

export const KeyIcon = () => (
  <ImageWrapper>
    <Image
      src="/assets/icons/quality.png"
      alt={`${COMPANY_NAME} quality`}
      layout="responsive"
      objectFit="contain"
      width={"100%"}
      height={"100%"}
    />
  </ImageWrapper>
);

export const HeadsetIcon = () => (
  <ImageWrapper>
    <Image
      src="/assets/icons/responsibility.png"
      alt={`${COMPANY_NAME} responsibility`}
      layout="responsive"
      objectFit="contain"
      width={"100%"}
      height={"100%"}
    />
  </ImageWrapper>
);

export const QuestionIcon = () => (
  <ImageWrapper>
    <Image
      src="/assets/icons/speed.png"
      alt={`${COMPANY_NAME} speed`}
      layout="responsive"
      objectFit="contain"
      width={"100%"}
      height={"100%"}
    />
  </ImageWrapper>
);
