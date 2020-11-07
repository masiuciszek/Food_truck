import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { updateUser } from "../../context/authState/AuthActions"
import { useAuthDispatch, useAuthState } from "../../context/authState/AuthProvider"
import { above, below } from "../../utils/helpers"
import { Button } from "../styled/Buttons"
import { FormElement, FormGroup, FormInput, FormLabel } from "../styled/FormElements"

interface ProfileFormProps {
  wantToEdit: boolean
  toggleWantToEdit: () => void
}
interface ProfileFormWrapperProps {
  wantToEdit: boolean
}

const ProfileFormWrapper = styled(motion.div)<ProfileFormWrapperProps>`
  position: ${({ wantToEdit }) => (wantToEdit ? "static" : "absolute")};
  flex: 1 1 50%;
  width: 50%;
  .group {
    width: 80%;
    margin: 0 auto;
    ${above.medium`
      width: 100%;
      margin: .2em auto;
    `}
    ${below.small`
      width: 100%;
    `}
  }
  input {
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[4]};
    width: 100%;
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

const ProfileForm: React.FC<ProfileFormProps> = ({ wantToEdit, toggleWantToEdit }) => {
  const d = useAuthDispatch()
  const { editUser, token } = useAuthState()
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

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    const newUserValues = { firstName, lastName, email }
    updateUser(newUserValues)(token || "")(d)
    d({ type: "CLEAR_SET_USER" })
    toggleWantToEdit()
  }

  React.useEffect(() => {
    if (editUser) {
      setFormData((prev) => ({
        ...prev,
        firstName: editUser.firstName,
        lastName: editUser.lastName,
        email: editUser.email,
      }))
    }
  }, [wantToEdit])

  return (
    <ProfileFormWrapper
      wantToEdit={wantToEdit}
      initial="closed"
      animate={wantToEdit ? "open" : "closed"}
      variants={variants}
      transition={{ damping: 8, duration: 0.1 }}
    >
      <FormElement onSubmit={handleSubmit}>
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
