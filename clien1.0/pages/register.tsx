import React from "react";
import RegisterForm from "components/Register.form";
import Image from "components/Image";
import { LargeWrapper, ImageWrapper } from "components/styles/Wrappers";

const RegisterPage = () => {
  return (
    <LargeWrapper>
      <RegisterForm title="Become a member like 100000 , other food fantast!  " />
      <ImageWrapper>
        <Image imagePath="/images/croods.png" />
      </ImageWrapper>
    </LargeWrapper>
  );
};

export default RegisterPage;
