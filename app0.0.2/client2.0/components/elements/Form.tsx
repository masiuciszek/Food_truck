import React from "react";
import styled from "styled-components";
import { handleFlex } from "../../src/utils/helpers";
import { renderForm } from "../../src/utils/render_helpers";
import { Button } from "../styled/Buttons";

interface FormProps {
  formData: FormDataType;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
  submitText: string;
  isLoginForm?: boolean;
}

const Form: React.FC<FormProps> = ({
  formData,
  className,
  submitText,
  isLoginForm = false,
  handleChange,
}) => {
  // TODO: Handle what kind of data you send to the form
  // filter it before you send form data

  return (
    <form className={className}>
      {renderForm(isLoginForm)(formData)(handleChange)}
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
