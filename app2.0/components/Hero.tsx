import * as React from "react";
import styled from "styled-components";

interface Props {
  className: string;
}

const Hero: React.FC<Props> = ({ children, className = "Hero" }) => {
  return (
    <div className={className}>
      <main>{children}</main>
    </div>
  );
};

export default styled(Hero)``;
