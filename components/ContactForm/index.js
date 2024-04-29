import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
//components
import AlertMessage from "../AlertMessage";
import Button from "../Button";
import Title from "../Title";
import Loader from "../Loader";
//styles
import * as Styled from "./styles";
// constants
import { validationRules } from "../../constants/validation";
import { AlertTypes } from "../../constants/messages";
import { ElementSize } from "../../constants/components-types";
import { CONTACT } from "../../constants/paths";
//helpers
import { returnMessageType } from "../../utils";
import { httpPost } from "../../services/httpRequests.service";
//images
import formImage from "/public/assets/images/formImage.jpeg";
//constants
import { ERROR_MESSAGE, MESSAGE_TIMER, SUCCESS_MESSAGE } from "./constants";
import { COMPANY_NAME } from "../../constants/staticInfo";

const ContactForm = () => {
  const [isLoading, setLoadingState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    try {
      setLoadingState(true);
      await httpPost("/api/contact-us", formData);
      setLoadingState(false);
      reset();
      handleSuccessCase();
    } catch (e) {
      handleFailCase();
      setLoadingState(false);
    }
  };

  const handleSuccessCase = () => {
    setSuccessMessage(SUCCESS_MESSAGE);

    setTimeout(() => {
      setSuccessMessage("");
    }, MESSAGE_TIMER);
  };

  const handleFailCase = () => {
    setErrorMessage(ERROR_MESSAGE);

    setTimeout(() => {
      setErrorMessage("");
    }, MESSAGE_TIMER);
  };

  return (
    <Styled.ContactSection>
      <Styled.ScrollToContact id={CONTACT} />
      <Styled.Container>
        <Styled.ContactBlock>
          <Styled.FormContainer>
            <Styled.Form onSubmit={handleSubmit(onSubmit)}>
              <Title variant={"h3"}>CONTACT US</Title>
              <Title variant={"h4"}>Get in touch</Title>
              <Styled.InputBlock>
                <Styled.Input
                  {...register("name", validationRules.name)}
                  id="name"
                  error={!!errors.name}
                  autoComplete={"off"}
                  label="Name"
                  variant="standard"
                />
                {errors.name && (
                  <AlertMessage
                    alertType={AlertTypes.ERROR}
                    message={returnMessageType("Name", errors.name)}
                  />
                )}
              </Styled.InputBlock>
              <Styled.InputBlock>
                <Styled.Input
                  {...register("email", validationRules.email)}
                  id="email"
                  error={!!errors.email}
                  autoComplete={"off"}
                  label="Email"
                  variant="standard"
                />
                {errors?.email && (
                  <AlertMessage
                    alertType={AlertTypes.ERROR}
                    message={returnMessageType("Email", errors.email)}
                  />
                )}
              </Styled.InputBlock>
              <Styled.InputBlock>
                <Styled.Input
                  {...register("companyName", validationRules.companyName)}
                  id="company-name"
                  error={!!errors.companyName}
                  autoComplete={"off"}
                  label="Your Company Name"
                  variant="standard"
                />
                {errors?.companyName && (
                  <AlertMessage
                    alertType={AlertTypes.ERROR}
                    message={returnMessageType(
                      "Company Name",
                      errors.companyName,
                    )}
                  />
                )}
              </Styled.InputBlock>
              <Styled.InputMessage hasDynamicHeight={true}>
                <Styled.Input
                  {...register("message", validationRules.message)}
                  id="message"
                  error={!!errors.message}
                  autoComplete={"off"}
                  label="Let’s talk about your idea"
                  variant="standard"
                  multiline
                  minRows={2}
                  maxRows={4}
                />
                {errors.message && (
                  <AlertMessage
                    alertType={AlertTypes.ERROR}
                    message={returnMessageType("Message", errors.message)}
                  />
                )}
              </Styled.InputMessage>

              <Styled.MessageBlock>
                {!!errorMessage && (
                  <AlertMessage
                    alertType={AlertTypes.ERROR}
                    message={errorMessage}
                  />
                )}

                {!!successMessage && (
                  <AlertMessage
                    alertType={AlertTypes.SUCCESS}
                    message={successMessage}
                  />
                )}

                {!!isLoading && (
                  <Styled.LoaderBlock>
                    <Loader size={ElementSize.SMALL} />
                  </Styled.LoaderBlock>
                )}
              </Styled.MessageBlock>

              <Styled.ButtonBlock>
                <Button
                  type={"submit"}
                  disabled={isLoading}
                  size={ElementSize.SMALL}
                >
                  Submit
                </Button>
              </Styled.ButtonBlock>
            </Styled.Form>
            <Styled.ImageBlock>
              <Image
                src={formImage}
                objectFit="cover"
                alt={`contact with ${COMPANY_NAME}`}
              />
            </Styled.ImageBlock>
          </Styled.FormContainer>
        </Styled.ContactBlock>
      </Styled.Container>
    </Styled.ContactSection>
  );
};

export default ContactForm;
