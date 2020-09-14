import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

interface NavProps {
  className?: string;
}

const Header: React.FC<NavProps> = ({
  className = "layout-header-main-header",
}) => {
  return (
    <header className={className}>
      <Nav />
    </header>
  );
};

export default styled(Header)`
  border: 2px solid white;
  padding: 2rem 1rem;
`;
