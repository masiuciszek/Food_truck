import React from "react";
import RegisterPageContainer from "../../components/containers/RegisterPageContainer";
import Form from "../../components/elements/Form";
import Title from "../../components/elements/Title";
import { ColumnPage } from "../../components/styled/wrappers";

const RegisterPage = () => {
  return (
    <>
      <ColumnPage>
        <Title className="register-page-title" title="Become a food master" />
        <RegisterPageContainer />
      </ColumnPage>
    </>
  );
};

export default RegisterPage;
