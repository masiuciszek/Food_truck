import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";
import { renderForm } from "../../src/utils/render_helpers";
import { Button } from "../styled/Buttons";

interface FormProps {
  className: string;
  submitText: string;
  isLoginForm?: boolean;
}

const Form: React.FC<FormProps> = ({
  className,
  submitText,
  isLoginForm = false,
}) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;

  return (
    <form className={className}>
      {renderForm(isLoginForm)}
      <Button type="submit"> {submitText} </Button>
    </form>
  );
};

export default styled(Form)`
  height: 100%;
  ${handleFlex("column", "center", "center")};
  margin: 1rem 0 3rem 0;
  padding: 1em 0.5em;
  ${Button} {
    margin: 1rem 0;
    width: 12em;
  }
`;
