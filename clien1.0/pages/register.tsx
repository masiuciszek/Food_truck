import React from "react";
import RegisterForm from "components/Register.form";
import styled from "styled-components";
import { below, handleFlex } from "components/styles/Helpers";
import Image from "components/Image";

const LargeWrapper = styled.div`
  ${handleFlex("row", "space-between", "center")};
  ${below.medium`
    ${handleFlex("column", "center", "center")};
  `}
`;

const ImageWrapper = styled.div`
  flex: 1;
  ${handleFlex("row", "center", "center")};
`;

const RegisterPage = () => {
  return (
    <LargeWrapper>
      <RegisterForm title='Become a member like 100000 , other food fantast!  ' />
      <ImageWrapper>
        <Image imagePath='/images/croods.png' />
      </ImageWrapper>
    </LargeWrapper>
  );
};

export default RegisterPage;
