import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { above, handleFlex, renderList } from "../../../src/utils/helpers";
import AuthActions from "../../AuthActions";

interface MobileListProps {
  onShowMobileMenu: boolean;
  className: string;
  onNavData: Link[];
}

const StyledList = styled.ul`
  width: 100%;
  height: 60%;
  ${handleFlex("column", "center", "center")};
  padding: 0;
  li {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
  a {
    font-size: 2rem;
    transition: ${({ theme }) => theme.transition.quickTransition};
    display: inline-block;
    position: relative;
    padding: 0.2em;

    &:after {
      content: "";
      transition: ${({ theme }) => theme.transition.quickTransition};
      position: absolute;
      background: ${(props) => props.theme.colors.elements.headline};
      left: 0;
      bottom: 0;
      width: 0;
      height: 0;
      padding: 0;
    }
    &:hover {
      &:after {
        width: 100%;

        opacity: 0.8;
        height: 0.1rem;
        padding: 0.1rem;
      }
    }
  }
`;

const MobileList: React.FC<MobileListProps> = ({
  onShowMobileMenu,
  className,
  onNavData,
}) => {
  const variants = {
    open: { y: 0, opacity: 1 },
    closed: { y: "-100%", opacity: 0 },
  };
  return (
    <motion.section
      className={className}
      initial="closed"
      animate={onShowMobileMenu ? "open" : "closed"}
      variants={variants}>
      <AuthActions isOnSmallScreen onShowMobileMenu={onShowMobileMenu} />
      <StyledList>{renderList(onNavData)}</StyledList>
    </motion.section>
  );
};
export default styled(MobileList)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.shadow.highlightShadow};
  ${handleFlex("column", "center", "center")};
  ${above.medium`
    display: none;
  `}
  ${above.small`
    width: 70%;
  `}
`;
