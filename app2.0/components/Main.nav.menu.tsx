import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { above } from "./styles/Helpers";

interface Props {
  isNavOpen: boolean;
}

const StyledMainNavMenu = styled(animated.div)`
  position: fixed;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.colors.menuBg};
  color: ${(props) => props.theme.colors.text};
  width: 100%;
  height: 100%;
  ${above.smallMedium`
    display: none;
  `}
`;

const MainNavMenu = ({ isNavOpen }: Props) => {
  const { opacity, x } = useSpring({
    opacity: isNavOpen ? 1 : 0,
    x: isNavOpen ? 0 : 100,
  });

  return (
    <StyledMainNavMenu
      style={{
        opacity,
        transform: x.interpolate((x) => `translate3d(${x * 1}%,0,0)`),
      }}>
      <h1>Main menu</h1>
    </StyledMainNavMenu>
  );
};

export default MainNavMenu;
