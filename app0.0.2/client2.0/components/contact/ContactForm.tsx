import React, { useState } from "react"
import styled from "styled-components"
import { above, below } from "@utils/helpers"
import { Button } from "@components/styled/Buttons"
import { FormElement, FormGroup, FormInput, FormLabel, TextArea } from "../styled/FormElements"
import { useAuthDispatch } from "context/authState/AuthProvider"

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
  const d = useAuthDispatch()
  const [formData, setFormData] = useState({
    html: "",
    email: "",
    subject: "",
  })

  const { html, email, subject } = formData
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { target } = evt

    setFormData({ ...formData, [target.name]: target.value })
  }

  const sendEmail = async (message: EmailMessage) => {
    const res = await fetch("http://localhost:4000/user/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })

    const data: EmailResponse = await res.json()
    if (data.success) {
      d({ type: "MESSAGE_HANDLER", payload: "RESOLVED" })
    }
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    const message = {
      html,
      email,
      title: `${email} want to contact you`,
      subject,
    } as EmailMessage

    sendEmail(message)

    setFormData({
      html: "",
      email: "",
      subject: "",
    })
  }

  return (
    <StyledFormWrapper>
      <FormElement onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>
            <span>email</span>
          </FormLabel>
          <FormInput type="email" value={email} name="email" onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>subject</span>
          </FormLabel>
          <FormInput type="text" name="subject" value={subject} onChange={handleChange} />
        </FormGroup>

        <FormGroup>
          <FormLabel>
            <span>message</span>
            <TextArea name="html" value={html} onChange={handleChange} />
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
