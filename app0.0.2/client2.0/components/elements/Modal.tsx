import React from "react"
import { motion } from "framer-motion"
import styled from "styled-components"

interface ModalProps {
  on: boolean
  toggle: () => void
  dataTestId: string
  key?: string
}

const Modalwrapper = styled(motion.div)``

const Modal: React.FC<ModalProps> = ({
  on,
  toggle,
  dataTestId,
  key = "modal",
}) => {
  return (
    <Modalwrapper
      key={key}
      data-testid={dataTestId}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <h1>hello</h1>
    </Modalwrapper>
  )
}
export default Modal
