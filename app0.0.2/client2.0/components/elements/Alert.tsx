import React from "react";
import {
  useAuthDispatch,
  useAuthState,
} from "../../context/authState/AuthProvider";
import styled from "styled-components";
import { motion } from "framer-motion";
import { below } from "../../src/utils/helpers";

interface AlertProps {
  message?: string;
  styles?: string;
}

const StyledAlert = styled(motion.div)`
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
  p {
    font-size: 2rem;
  }
  ${below.small`
    width: 100%;
    margin: 0;
    left: 0;
  `}
`;

const Alert: React.FC<AlertProps> = ({ message = "ooops", styles }) => {
  const { status } = useAuthState();
  const d = useAuthDispatch();

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -100 },
  };
  React.useEffect(() => {
    if (status === "REJECTED") {
      setTimeout(() => {
        d({ type: "MESSAGE_HANDLER", payload: "EMPTY" });
      }, 5000);
    }
  }, [status]);

  return (
    <StyledAlert
      initial="closed"
      animate="open"
      transition={{ damping: 50 }}
      variants={variants}>
      <p>{message}</p>
    </StyledAlert>
  );
};
export default Alert;
