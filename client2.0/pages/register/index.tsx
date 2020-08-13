import React from "react";
import { Page, TitleWrapper } from "../../components/styled/Page";
import Title from "../../components/styled/Title";

const RegisterPage = () => {
  return (
    <Page>
      <TitleWrapper>
        <Title
          className="Register-Title"
          title="Register like 1000000 other food lovers"
          subTitle="Become special!"
        />
      </TitleWrapper>
      <h1>RegisterForm goes here</h1>
    </Page>
  );
};

export default RegisterPage;
