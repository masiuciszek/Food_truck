import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { useAuthState } from "../../context/authState/AuthProvider"
import { leaveReview } from "../../context/storeState/storeActions"
import { useStoreDispatch } from "../../context/storeState/StoreProvider"
import { handleFlex } from "../../src/utils/helpers"
import { Button } from "../styled/Buttons"
import { TextArea } from "../styled/FormElements"
import Stars from "./Stars"

interface CommentAreaProps {
  on: boolean
  storeId: string
}

const StyledCommentArea = styled(motion.section)`
  ${handleFlex("column", "center", "center")};
  padding: 0.5em;
  form {
    padding: 0.5em 1em;
    width: 100%;
    ${handleFlex("column", "center", "center")};
    button {
      margin: 1rem auto;
      width: 12em;
      &:hover {
        width: 11.5em;
        border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
      }
    }
  }
`

const CommentArea: React.FC<CommentAreaProps> = ({ on, storeId }) => {
  const [rating, setRating] = useState(() => 0)
  const [text, setText] = useState("")
  const { token: authToken } = useAuthState()
  const d = useStoreDispatch()
  console.log(storeId)
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setText(evt.target.value)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    const formData = { text, rating }

    if (authToken) {
      leaveReview(formData)(authToken)(d)(storeId)
      setText("")
      setRating(0)
    } else {
      d({ type: "STORE_MESSAGE_HANDLER", payload: "REJECTED" })
    }
  }

  return (
    <StyledCommentArea
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      exit="closed"
      transition={{ damping: 100 }}>
      <h3>Leave a review</h3>
      <form onSubmit={handleSubmit}>
        <Stars rating={rating} setRating={setRating} />
        <TextArea name="text" value={text} onChange={handleChange} />
        <Button bgColor textColor type="submit">
          Leave a review
        </Button>
      </form>
    </StyledCommentArea>
  )
}
export default CommentArea
