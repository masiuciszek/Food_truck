import styled from "styled-components";
import { below, handleFlex } from "./Helpers";

export const HeroContentWrapper = styled.div`
  height: calc(70vh - 80px);
  padding: 1rem;
  margin: 3rem auto;
  ${handleFlex("row", "space-between", "center")};
  img {
    width: 80%;
  }
  ${below.smallMedium`
    ${handleFlex("column", "center", "center")};
  `}
`;

export const NavLogo = styled.div`
  padding: 0.4rem;
  ${(props) => props.theme.shadow.elevations[2]};
  border-radius: 0.5rem;
  width: 15rem;
  img {
    width: 12rem;
  }
`;
