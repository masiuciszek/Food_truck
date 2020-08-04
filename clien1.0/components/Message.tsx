import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated, config } from "react-spring";
import { AppState } from "src/store";
import { clearUserMessage } from "src/store/auth/auth.actions";
import { selectUserMessage } from "src/store/auth/auth.selectors";
import styled from "styled-components";
import { below } from "./styles/Helpers";

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
  }
  ${below.medium`
    width: 85vw;
  `}
`;

const Message = () => {
  const dispatch = useDispatch();
  const currentUserState = useSelector((state: AppState) =>
    selectUserMessage(state),
  );

  React.useEffect(() => {
    if (currentUserState) {
      setTimeout(() => {
        dispatch(clearUserMessage());
      }, 5000);
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
    </MessageStyles>
  );
};
export default Message;
