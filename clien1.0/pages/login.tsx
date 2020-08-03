import React from "react";
import Image from "components/Image";
import { LargeWrapper, ImageWrapper } from "components/styles/Wrappers";
import LoginForm from "components/Login.form";

const LoginPage = () => {
  return (
    <LargeWrapper margin="8rem 0">
      <LoginForm title="Login" />
      <ImageWrapper>
        <Image imagePath="/images/cityscapes.png" />
      </ImageWrapper>
    </LargeWrapper>
  );
};

export default LoginPage;
