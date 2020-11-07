import React from "react"
import { useAuthState, useAuthDispatch } from "../../context/authState/AuthProvider"
import styled, { css } from "styled-components"
import { Button } from "../styled/Buttons"
import ProfileForm from "./ProfileForm"
import { useToggle } from "../../hooks/useToggle"
import { below } from "../../utils/helpers"
import Alert from "../elements/Alert"
import { deleteUser } from "../../context/authState/AuthActions"
import { useRouter } from "next/router"

const StyledProfile = styled.section`
  padding: 2rem 1rem;
  width: 100%;
`

interface GridProps {
  wantToEdit: boolean
}
const Grid = styled.div<GridProps>`
  border: 2px solid ${(props) => props.theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  .user {
    flex: 1 1 50%;
    width: 50%;
    margin-top: 2rem;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    p {
      border-bottom: 1px solid ${({ theme }) => theme.colors.illustrations.stroke};
      padding: 0.5rem;
      width: ${({ wantToEdit }) => (wantToEdit ? "70%" : "25em")};
      span {
        color: ${({ theme }) => theme.colors.illustrations.stroke};
        margin: 0 0.3rem;
        text-transform: capitalize;
        background: ${({ theme }) => theme.colors.illustrations.highlight};
        color: ${({ theme }) => theme.colors.illustrations.stroke};
        padding: 0.2em;
        box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
        border-radius: ${({ theme }) => theme.borderRadius};
      }
    }
  }
  ${below.medium`
    flex-flow: column wrap;
    .user{
      p{
        width: 100%;
      }
    }
  `}
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
    z-index: 1;
  }
`

const Profile = () => {
  const { user, status, token } = useAuthState()
  const dispatch = useAuthDispatch()
  const router = useRouter()
  const { state: wantToEdit, toggle: toggleWantToEdit } = useToggle()

  const { state: shouldBeDeleted, setStateToTrue: shouldBeDeletedSetToTrue } = useToggle()

  const handleEdit = (user: User): void => {
    dispatch({ type: "SET_USER", payload: user })
    toggleWantToEdit()
  }

  const handleConfirmMessage = (): void => {
    dispatch({ type: "MESSAGE_HANDLER", payload: "QUESTION" })
  }

  React.useEffect(() => {
    if (shouldBeDeleted) {
      deleteUser(token || "")(dispatch)
      router.push("/")
    }
  }, [shouldBeDeleted])

  return (
    <StyledProfile>
      {status === "QUESTION" && (
        <Alert
          message="Are you sure?"
          messageSecondary="This can not been undone"
          styles={alertStyles}
          showDeleteActions
          fn={shouldBeDeletedSetToTrue}
        />
      )}
      <Grid wantToEdit={wantToEdit}>
        <div className="user">
          <p>
            <span>name</span>
            {user?.firstName} {user?.lastName}
          </p>
          <p>
            {" "}
            <span>Role</span> {user?.role}
          </p>
        </div>
        <ProfileForm wantToEdit={wantToEdit} toggleWantToEdit={toggleWantToEdit} />
      </Grid>

      <BtnWrapper>
        {user && <Button onClick={() => handleEdit(user)}>{wantToEdit ? "𝙓" : "Edit"}</Button>}
        <Button onClick={handleConfirmMessage}>Delete</Button>
      </BtnWrapper>
    </StyledProfile>
  )
}

export default Profile

const alertStyles = css`
  top: 1rem;
  background: ${(props) => props.theme.colors.illustrations.secondary};
  .content {
    p {
      color: ${(props) => props.theme.colors.illustrations.main} !important;
    }
  }
`
