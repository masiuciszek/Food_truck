import styled from "styled-components";
import Link from "next/link";

export const AppLink = styled(Link)``;

interface ButtonProps {
  bgColor?: boolean;
  textColor?: boolean;
}

export const Button = styled.button<ButtonProps>`
  font-size: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.illustrations.main};
  background: ${({ theme, bgColor }) =>
    bgColor ? theme.colors.elements.bg : "transparent"};
  color: ${({ theme, textColor }) =>
    textColor
      ? theme.colors.elements.buttonText
      : theme.colors.illustrations.main};
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
