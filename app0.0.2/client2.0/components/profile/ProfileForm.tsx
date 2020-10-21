import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { above, below } from "../../src/utils/helpers"
import { Button } from "../styled/Buttons"
import {
  FormElement,
  FormGroup,
  FormInput,
  FormLabel,
} from "../styled/FormElements"

interface ProfileFormProps {
  wantToEdit: boolean
}

const ProfileFormWrapper = styled(motion.div)<ProfileFormProps>`
  position: ${({ wantToEdit }) => (wantToEdit ? "static" : "absolute")};
  flex: 1 1 50%;
  width: 50%;
  /* TODO: start here please!! */
  .group {
    border: 2px solid red;
  }
  input {
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    width: 100%;
    /* 1140  1520*/
    /* TODO: Make a function */
    @media (min-width: 1140px) and (max-width: 1520px) {
      width: 59%;
    }
  }

  button[type="submit"] {
    position: static;
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    margin: 1rem auto;
    display: block;
    color: ${({ theme }) => theme.colors.elements.buttonText};
    background: ${({ theme }) => theme.colors.elements.button};
    font-size: 1.1rem;
    width: 13em;
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
      background: ${({ theme }) => theme.colors.elements.buttonText};
    }

    ${below.small`
      width: 79%;
    `}
  }

  ${below.medium`
      width: 100%;
    `}
`

const ProfileForm: React.FC<ProfileFormProps> = ({ wantToEdit }) => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const { firstName, lastName, email } = formData

  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = evt.target

    setFormData({ ...formData, [name]: value })
  }

  return (
    <ProfileFormWrapper
      wantToEdit={wantToEdit}
      initial="closed"
      animate={wantToEdit ? "open" : "closed"}
      variants={variants}>
      <FormElement>
        <FormGroup className="group">
          <FormLabel>
            <span>first name</span>
          </FormLabel>
          <FormInput
            type="text"
            name="firstName"
            placeholder="first name"
            value={firstName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="group">
          <FormLabel>
            <span>Last name</span>
          </FormLabel>
          <FormInput
            type="text"
            name="lastName"
            placeholder="last name"
            value={lastName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup className="group">
          <FormLabel>
            <span>email</span>
          </FormLabel>
          <FormInput
            type="text"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormGroup>

        <Button type="submit">Update</Button>
      </FormElement>
    </ProfileFormWrapper>
  )
}
export default ProfileForm
