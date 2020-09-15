import styled from "styled-components";
import Link from "next/link";

export const AppLink = styled(Link)``;

export const Button = styled.button`
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  background: transparent;
  color: ${({ theme }) => theme.colors.illustrations.main};
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.mainTransition};
  box-shadow: ${({ theme }) => theme.shadow.elevations[3]};
  width: 7rem;
  &:active {
    position: relative;
    top: 8px;
  }
  &:hover {
    background: ${({ theme }) => theme.colors.illustrations.highlight};
    width: 6.8rem;
  }
`;
