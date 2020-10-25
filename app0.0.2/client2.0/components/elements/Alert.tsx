import React from "react"
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider"
import styled from "styled-components"
import { motion } from "framer-motion"
import { below, handleFlex } from "../../src/utils/helpers"
import { Button } from "../styled/Buttons"

interface AlertProps {
  message?: string
  messageSecondary?: string
  styles?: Record<string, any>
  fn?: any
}

interface StyleAlertProps {
  styles?: Record<string, any>
}

const StyledAlert = styled(motion.div)<StyleAlertProps>`
  background: ${({ theme }) => theme.colors.elements.headline};
  color: ${({ theme }) => theme.colors.elements.paragraph};
  padding: 1em 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80%;
  margin: 0 auto;
  border: 2px solid ${({ theme }) => theme.colors.illustrations.stroke};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 75%;
  left: 50%;
  margin-left: -37.5%;
  top: 50%;
  z-index: 2;
  p {
    font-size: 2rem;
  }
  ${below.small`
    width: 100%;
    margin: 0;
    left: 0;
  `}
  .content {
    ${handleFlex("column", "center", "center")};
  }
  ${({ styles }) => styles && styles};
  .btn-group {
    display: flex;
    flex-wrap: row wrap;
    button {
      position: static;
      background: ${({ theme }) => theme.colors.illustrations.main};
      color: ${({ theme }) => theme.colors.illustrations.highlight};
      width: 7em;
      padding: 0.1rem 0.2rem;
      margin: 0.5rem;
      &:hover {
        background: ${({ theme }) => theme.colors.illustrations.highlight};
        color: ${({ theme }) => theme.colors.illustrations.main};
      }
    }
  }
`

const Alert: React.FC<AlertProps> = ({
  message = "ooops",
  messageSecondary,
  styles,
  fn,
}) => {
  const { status } = useAuthState()
  const d = useAuthDispatch()

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  }
  React.useEffect(() => {
    if (status === "REJECTED") {
      setTimeout(() => {
        d({ type: "MESSAGE_HANDLER", payload: "EMPTY" })
      }, 5000)
    }
  }, [status])

  return (
    <StyledAlert
      styles={styles}
      initial="closed"
      animate="open"
      transition={{ damping: 50 }}
      variants={variants}>
      <div className="content">
        <p className="main">{message}</p>
        {messageSecondary && <p className="secondary">{messageSecondary}</p>}
        {fn && (
          <div className="btn-group">
            <Button onClick={() => sessionStorage.setItem("deleteMe", "true")}>
              Yes
            </Button>
            <Button
              onClick={() =>
                d({ type: "MESSAGE_HANDLER", payload: "NATURAL" })
              }>
              No
            </Button>
          </div>
        )}
      </div>
    </StyledAlert>
  )
}
export default Alert
