import styled from "styled-components";
import { below, handleFlex } from "../../src/utils/helpers";

export const Main = styled.main`
  max-width: ${(props) => props.theme.size.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export const Page = styled.div`
  /* TODO: DELETE!!! */
  border: 2px solid red;
  ${handleFlex("row", "space-between", "center")};
  padding: 4rem 1rem;
  margin: 2rem auto;
  ${below.medium`
    ${handleFlex("column", "space-between", "center")};
  `}
`;

export const TitleWrapper = styled.div`
  flex: 1;
  button {
    margin: 1rem 0;
  }
`;

interface Props {
  height?: string;
  width?: string;
  padding?: string;
  margin?: string;
}
export const PushDownFix = styled.div<Props>`
  height: ${({ height }) => (height ? height : "0")};
  width: ${({ width }) => (width ? width : "0")};
  padding: ${({ padding }) => (padding ? padding : "0")};
  margin: ${({ margin }) => (margin ? margin : "0")};
`;
