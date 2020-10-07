import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { handleFlex } from "../../src/utils/helpers"
import { Button } from "../styled/Buttons"
import { TextArea } from "../styled/FormElements"
import Stars from "./Stars"

interface CommentAreaProps {
  on: boolean
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

const CommentArea: React.FC<CommentAreaProps> = ({ on }) => {
  const [formData, setFormData] = React.useState({
    text: "",
    rating: 1,
  })

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    //
  }

  return (
    <StyledCommentArea
      initial="closed"
      animate={on ? "open" : "closed"}
      variants={variants}
      exit="closed"
      transition={{ damping: 100 }}>
      <h3>Leave a review</h3>
      <form>
        <Stars />
        <TextArea />
        <Button bgColor textColor type="submit">
          Leave a review
        </Button>
      </form>
    </StyledCommentArea>
  )
}
export default CommentArea
