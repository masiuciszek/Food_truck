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
  li {
    padding: 1rem;
  }
  a {
    font-size: 2rem;
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
      <StyledList>
        <AuthActions isOnSmallScreen />
        {renderList(onNavData)}
      </StyledList>
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
  ${handleFlex("row", "center", "center")};
  ${above.medium`
    display: none;
  `}
  ${above.small`
    width: 70%;
  `}
`;
