import Link from "next/link";
import * as React from "react";
import { navigationLinks, socialLinks } from "src/data/initialData";
import { useLinks } from "src/hooks/useLinks";
import styled from "styled-components";
import { below, handleFlex } from "./styles/Helpers";

const StyledList = styled.div`
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  ${handleFlex("column", "center", "flex-end")};

  ${below.small`
      ${handleFlex("column", "center", "center")};
      width: 100%;
      margin: 1rem auto;

  `}
`;

const List = styled.ul`
  ${handleFlex("row", "space-evenly", "center")};
  li {
    padding: 1rem;
    text-transform: capitalize;
  }
  a {
    font-size: 1.8rem;
    display: block;
    position: relative;
    transition: ${({ theme: { transition } }) => transition.mainTransition};
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

const FooterList = () => {
  const [navigation] = useLinks<AppLink>("Navigation");
  const [social] = useLinks<SocialType>("Social");

  console.log(navigation);

  return (
    <StyledList>
      <List>
        {navigation.map(({ name, path }) => (
          <li key={path}>
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
    </StyledList>
  );
};
export default FooterList;
