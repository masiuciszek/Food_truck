import React from "react"
import styled from "styled-components"
import { above, below } from "../../utils/helpers"
import { Button } from "../styled/Buttons"
import { FormElement, FormGroup, FormInput, FormLabel, TextArea } from "../styled/FormElements"

const StyledFormWrapper = styled.section`
  width: 100%;
  div {
    margin: 0 auto;
    ${below.small`
      width: 100%;
      margin: 0 auto;
    `}
    ${above.small`
      width: 80%;
    `}
  }

  input {
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  }

  button[type="submit"] {
    position: static;
    margin: 1em auto;
    display: block;
    width: 12em;
    color: ${({ theme }) => theme.colors.illustrations.stroke};
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  }

  textarea {
    width: 100%;
  }
`

const ContactForm = () => {
  return (
    <StyledFormWrapper>
      <FormElement>
        <FormGroup>
          <FormLabel>
            <span>name</span>
          </FormLabel>
          <FormInput type="text" />
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>email</span>
          </FormLabel>
          <FormInput type="email" />
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>message</span>
            <TextArea />
          </FormLabel>
        </FormGroup>

        <Button textColor bgColor type="submit">
          Send
        </Button>
      </FormElement>
    </StyledFormWrapper>
  )
}
export default ContactForm
