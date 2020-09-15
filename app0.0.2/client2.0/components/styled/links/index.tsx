import styled from "styled-components";
import Link from "next/link";

export const AppLink = styled(Link)`
  transition: ${({ theme }) => theme.transition.quickTransition};
  display: block;
  position: relative;
  background: red;

  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    background: blue;
    width: 100%;
    height: 0.1rem;
    padding: 0.1rem;
  }
`;
