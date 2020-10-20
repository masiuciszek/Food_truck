import React from "react"
import {
  useAuthState,
  useAuthDispatch,
} from "../../context/authState/AuthProvider"
import styled from "styled-components"
import { Button } from "../styled/Buttons"
import ProfileForm from "./ProfileForm"
import { useToggle } from "../../hooks/useToggle"

const StyledProfile = styled.section`
  border: 2px solid red;
  padding: 2rem 1rem;
  width: 100%;
`
const Grid = styled.div`
  display: grid;
  border: 2px solid red;
  grid-template-columns: 1fr 1fr;
`

const BtnWrapper = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  button {
    position: static;
    color: ${({ theme }) => theme.colors.illustrations.stroke};
    border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
    box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
    font-size: 1.3em;
  }
`

const Profile = () => {
  const { user } = useAuthState()
  const dispatch = useAuthDispatch()
  const { state: wantToEdit, toggle: toggleWantToEdit } = useToggle()

  const handleEdit = (user: User): void => {
    dispatch({ type: "SET_USER", payload: user })
    toggleWantToEdit()
  }

  return (
    <StyledProfile>
      <Grid>
        <h2>{user?.firstName}</h2>
        <ProfileForm wantToEdit={wantToEdit} />
      </Grid>

      <BtnWrapper>
        {user && <Button onClick={() => handleEdit(user)}>Edit</Button>}
        <Button>Delete</Button>
      </BtnWrapper>
    </StyledProfile>
  )
}
export default Profile
