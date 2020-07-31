import styled from "styled-components";
import { below, handleFlex } from "./Helpers";

export const HeroContentWrapper = styled.div`
  padding: 1rem;
  ${handleFlex("row", "space-between", "center")};
  img {
    width: 80%;
  }
  ${below.smallMedium`
    ${handleFlex("column", "center", "center")};
  `}
`;
