import React from "react";
import Form from "../../components/elements/Form";
import Title from "../../components/elements/Title";
import { ColumnPage } from "../../components/styled/wrappers";

const RegisterPage = () => {
  return (
    <>
      <ColumnPage>
        <Title className="register-page-title" title="Become a food master" />
        <Form className="register-form" submitText="sign up" />
      </ColumnPage>
    </>
  );
};

export default RegisterPage;
