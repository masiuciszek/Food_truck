import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
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

const ProfileFormWrapper = styled(motion.div)`
  input {
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
  }

  button[type="submit"] {
    position: relative;
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    margin: 1rem auto;
    display: block;
    color: ${({ theme }) => theme.colors.elements.buttonText};
    background: ${({ theme }) => theme.colors.elements.button};
    font-size: 1.1rem;
    &:hover {
      color: ${({ theme }) => theme.colors.elements.button};
      background: ${({ theme }) => theme.colors.elements.buttonText};
    }
  }
`

const ProfileForm: React.FC<ProfileFormProps> = ({ wantToEdit }) => {
  const variants = {
    open: { x: 0, opacity: 1 },
    closed: { x: "100%", opacity: 0 },
  }

  return (
    <ProfileFormWrapper
      initial="closed"
      animate={wantToEdit ? "open" : "closed"}
      variants={variants}>
      <FormElement>
        <FormGroup>
          <FormLabel>
            <span>first name</span>
          </FormLabel>
          <FormInput type="text" placeholder="first name" />
        </FormGroup>

        <Button type="submit">Update</Button>
      </FormElement>
    </ProfileFormWrapper>
  )
}
export default ProfileForm
