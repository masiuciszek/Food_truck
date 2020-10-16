import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { above, handleFlex } from "../../src/utils/helpers"

interface ModalProps {
  on: boolean
  toggle: () => void
  dataTestId: string
  key?: string
  title: string
  desc?: string
}

const Modalwrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.42);
  width: 100%;
  height: 100%;
  ${handleFlex("row", "center", "center")};
`

const Modalbody = styled.div`
  background: ${({ theme }) => theme.colors.illustrations.main};
  color: ${({ theme }) => theme.colors.elements.paragraph};
  padding: 2em 1em;
  width: 100%;
  ${handleFlex("column", "center", "center")};
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.secondary};
  position: relative;
  ${above.medium`
    width: 80%;
  `}

  button {
    position: absolute;
    top: 0;
    right: 1rem;
    border: none;
    background: transparent;
    font-size: 1.5em;
    cursor: pointer;
  }
`

const Modal: React.FC<ModalProps> = ({
  on,
  toggle,
  dataTestId,
  key = "modal",
  children,
  title,
  desc,
}) => {
  return (
    <Modalwrapper
      key={key}
      data-testid={dataTestId}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ damping: 8, delay: 0.25 }}
      exit={{ opacity: 0, x: "-100%" }}>
      <Modalbody>
        <button type="button" onClick={toggle}>
          𝙓
        </button>
        <h3>{title}</h3>
        <p>{desc}</p>
        {children}
      </Modalbody>
    </Modalwrapper>
  )
}
export default Modal
