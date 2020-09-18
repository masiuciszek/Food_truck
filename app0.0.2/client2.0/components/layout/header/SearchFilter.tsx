import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { above, below, handleFlex } from "../../../src/utils/helpers";

interface Props {
  showFilerSearch: boolean;
}

const SearchFilterWrapper = styled(motion.div)`
  flex: 1;
  position: fixed;
  width: 70%;
  padding: 1rem;
  ${below.small`
    width: 85%;
  `}
`;

const SearchFilterElement = styled.input`
  border: 3px solid ${({ theme }) => theme.colors.elements.headline};
  padding: 0.4rem 0.7rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: 1rem;
  outline: 0;
  transition: ${(props) => props.theme.transition.quickTransition};
  display: block;
  margin: 0 auto;
  &:focus {
    border: 3px solid ${({ theme }) => theme.colors.illustrations.highlight};
    padding: 0.45rem 0.75rem;
    ${above.small`
      width: 95%;
    `}

    ${above.medium`
      width: 75%;
    `}

    ${above.large`
      width: 70%;
    `}

    ${above.xLarge`
      width: 44rem;
    `}
  }
  ${above.small`
    width: 100%;
  `}
  ${above.medium`
    width: 80%;

  `}
  ${above.large`
    width: 75%;
  `}
  ${above.xLarge`
    width: 45rem;
  `}
`;

const SearchFilter = ({ showFilerSearch }: Props) => {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };
  return (
    <SearchFilterWrapper
      initial="closed"
      animate={showFilerSearch ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.8 }}>
      <SearchFilterElement type="text" placeholder="search store..." />
    </SearchFilterWrapper>
  );
};
export default SearchFilter;
