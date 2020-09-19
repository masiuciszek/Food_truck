import React from "react";
import Form from "../../components/elements/Form";
import Title from "../../components/elements/Title";
import { ColumnPage } from "../../components/styled/wrappers";

const LoginPage = () => {
  return (
    <>
      <ColumnPage>
        <Title className="login-page-title" title="Sign in" />
        <Form className="sign-in-form" submitText="sign in" isLoginForm />
      </ColumnPage>
    </>
  );
};

export default LoginPage;
