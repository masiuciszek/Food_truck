import React from "react"
import {
  useAuthState,
  useAuthDispatch,
} from "../../context/authState/AuthProvider"

import styled from "styled-components"
import { Button } from "../styled/Buttons"
import { below } from "../../src/utils/helpers"

const StyledProfile = styled.section`
  border: 2px solid red;
  padding: 2rem 1rem;
  width: 100%;
`

const BtnWrapper = styled.div`
  /* width: 25em; */
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

  return (
    <StyledProfile>
      <strong>{user?.firstName}</strong>

      <BtnWrapper>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </BtnWrapper>
    </StyledProfile>
  )
}
export default Profile
