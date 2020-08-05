import Link from "next/link";
import React from "react";
import { useSpring, animated } from "react-spring";
import { useLinks } from "src/hooks/useLinks";
import styled from "styled-components";
import { above, handleFlex } from "./styles/Helpers";

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
  ${handleFlex("column", "center", "center")};
  ${above.smallMedium`
    display: none;
  `}
`;

const List = styled.ul`
  background: ${({ theme }) => theme.colors.shadowThree};
  border-radius: 1rem;
  padding: 5rem 2rem;
  width: 20em;
  margin-right: auto;
  margin-left: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.button};
  li {
    padding: 1rem;
  }
  a {
    text-transform: capitalize;
    font-size: 1.8rem;
    display: block;
    position: relative;
    transition: ${({ theme: { transition } }) => transition.mainTransition};
    color: #333;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${({ theme: { colors } }) => colors.button};
      padding: 0.1rem;
      height: 0.2rem;
      width: 25%;
      transition: ${({ theme: { transition } }) => transition.mainTransition};
    }
    &:hover {
      &:after {
        width: 100%;
      }
    }
  }
`;

const SocialMediaList = styled.ul``;

const MainNavMenu = ({ isNavOpen }: Props) => {
  const [navigation] = useLinks<AppLink>("Navigation");
  const [social] = useLinks<SocialType>("Social");

  const { opacity, x } = useSpring({
    opacity: isNavOpen ? 1 : 0,
    x: isNavOpen ? 0 : 100,
  });

  return (
    <StyledMainNavMenu
      style={{
        opacity,
        transform: x.interpolate((x) => `translate3d(${x * 1}%,0,0)`),
      }}
    >
      <List>
        {navigation.map(({ name, path }) => (
          <li key={name}>
            <Link href={path}>
              <a>{name}</a>
            </Link>
          </li>
        ))}
      </List>

      <List>
        {social.map(({ name, path }) => (
          <li key={path}>
            <a href={path} target="_blank" rel="noreferrer">
              {name === "github"
                ? `🐒 ${name}`
                : name === "instagram"
                ? `📸 ${name}`
                : name === "twitter"
                ? `🐦 ${name}`
                : ""}
            </a>
          </li>
        ))}
      </List>
    </StyledMainNavMenu>
  );
};

export default MainNavMenu;
