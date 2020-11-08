import React from "react"
import styled from "styled-components"
import { handleFlex } from "../../utils/helpers"
import { renderForm } from "../../utils/render_helpers"
import { Button } from "../styled/Buttons"

interface FormProps {
  formData: FormDataType
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
  className: string
  submitText: string
  isLoginForm?: boolean
  handleSubmit: (evt: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<FormProps> = ({
  formData,
  className,
  submitText,
  isLoginForm = false,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form className={className} onSubmit={handleSubmit}>
      {renderForm(isLoginForm)(formData)(handleChange)}
      <Button type="submit" data-testid="submit-btn">
        {" "}
        {submitText}{" "}
      </Button>
    </form>
  )
}

export default styled(Form)`
  height: 100%;
  ${handleFlex("column", "center", "center")};
  margin: 1rem 0 3rem 0;
  padding: 1em 0.5em;
  ${Button} {
    margin: 1rem 0;
    width: 12em;
  }
`
