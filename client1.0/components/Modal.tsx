import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import ForgotPasswordForm from "./Forgot.password.form";
import { above, below, handleFlex } from "./styles/Helpers";

interface Props {
  on: boolean;
  modalBodyType: ModalBodyType;
  onSwitch: Fn;
}

const ModalAnimated = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.shadowOne};
  ${handleFlex("column", "center", "center")};
`;

const ModalBody = styled.section`
  padding: 2rem 3rem;
  background: #fff;
  height: 45rem;
  width: 66vw;
  ${handleFlex("column", "center", "center")};
  position: relative;
  border-radius: 2rem;
  border: 2px solid ${({ theme: { colors } }) => colors.button};
  ${above.medium`
    width: 50em;
  `}
  ${below.small`
    width: 90%;
  `}
  #close-modal {
    position: absolute;
    top: 1rem;
    right: 2rem;
    cursor: pointer;
    font-size: 4rem;
  }
`;

const Modal = ({ on, modalBodyType, onSwitch }: Props) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  });
  return (
    <ModalAnimated
      style={{
        transform: x.interpolate((x) => `translate3d(${x * 1}%,0,0)`),
        opacity,
      }}
    >
      <ModalBody>
        <span id="close-modal" onClick={onSwitch}>
          ╳
        </span>
        {modalBodyType === "forgot password" && <ForgotPasswordForm />}
      </ModalBody>
    </ModalAnimated>
  );
};

export default Modal;
