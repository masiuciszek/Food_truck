import styled from "styled-components";
import { above, below, handleFlex } from "../../../src/utils/helpers";
import { motion } from "framer-motion";

export const Page = styled.section`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
  min-height: 65vh;
  display: flex;
  align-items: center;
  h1,
  p {
    color: ${({
      theme: {
        colors: { elements },
      },
    }) => elements.headline};
  }
`;

export const PageColumn = styled(Page)`
  ${handleFlex("column", "center", "center")}
  min-height: 45vh;
`;

export const PageWrapper = styled.section`
  margin: 2rem auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
`;

export const ColumnPage = styled(Page)`
  display: block;
  max-width: ${({ theme }) => theme.size.maxWidthPage};
`;

export const HomePageWrapper = styled.div`
  padding: 1em 0.5em;
  width: 100%;
  margin: 0 auto;
  ${handleFlex("column", "center", "center")};
  ${above.medium`
    ${handleFlex("row", "space-between", "center")};
  `}
`;

export const PushDown = styled.div`
  padding: 1.5em;
  ${below.medium`
    padding: 1.5em;

  `}
`;

export const Col = styled.section`
  flex: 1;
  ${below.medium`
  .home-hero {
    width: 100%;
  }

  `}
`;

export const Grid = styled(motion.section)`
  margin: 1rem auto 5rem auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
