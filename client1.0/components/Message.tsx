/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import { AppState } from "src/store";
import { clearUserMessage, deleteMe } from "src/store/auth/auth.actions";
import { selectUserMessage } from "src/store/auth/auth.selectors";
import styled from "styled-components";
import { Btn } from "./styles/Btns";
import { below, handleFlex } from "./styles/Helpers";

const MessageStyles = styled(animated.div)`
  position: fixed;
  top: 2rem;
  background: ${(props) => props.theme.colors.shadowTwo};
  padding: 2rem 1rem;
  width: 60em;
  z-index: 100;
  border-radius: 2rem;
  h3 {
    font-size: 5rem;
    color: ${(props) => props.theme.colors.background};
    text-transform: capitalize;
    text-shadow: 1px 2px 2px ${(props) => props.theme.colors.button};
    text-align: center;
  }
  ${below.medium`
    width: 85vw;
  `}
`;

const BtnGroup = styled.div`
  ${handleFlex("row", "space-evenly", "center")}
`;

interface Props {
  holdTime?: number; // amount for holding the message
  ctaDelete?: boolean;
  token?: string;
}

const Message = ({ holdTime = 5000, ctaDelete, token }: Props) => {
  const dispatch = useDispatch();
  const currentUserState = useSelector((state: AppState) =>
    selectUserMessage(state),
  );

  React.useEffect(() => {
    if (currentUserState) {
      setTimeout(() => {
        dispatch(clearUserMessage());
      }, holdTime);
    }
  }, [currentUserState]);

  const { opacity, y } = useSpring({
    opacity: currentUserState ? 1 : 0,
    y: currentUserState ? 0 : 100,
    config: config.wobbly,
  });

  return (
    <MessageStyles
      style={{
        opacity,
        transform: y.interpolate((y) => `translate3d(0,${y * 1}%,0)`),
      }}
    >
      {currentUserState && <h3>{currentUserState}</h3>}

      {ctaDelete && (
        <BtnGroup>
          <Btn onClick={() => dispatch(deleteMe(token || ""))}>Yes</Btn>
          <Btn onClick={() => dispatch(clearUserMessage())}>No</Btn>
        </BtnGroup>
      )}
    </MessageStyles>
  );
};
export default Message;
