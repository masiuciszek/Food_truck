import styled from "styled-components";

interface P {
  onTheme: string;
}

export const ToggleStyles = styled.div<P>`
  width: 15rem;
  margin-left: auto;
  border-radius: 1rem;
  display: flex;
  position: relative;
  padding: 2rem 0;
  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    z-index: 2;
    transition: ${({ theme }) => theme.transition.mainTransition};
    transform: ${({ onTheme }) =>
      onTheme === "LIGHT" ? "translateX(0%)" : "translateX(80%)"};
    position: absolute;
    left: ${({ onTheme }) => (onTheme === "LIGHT" ? "20%" : "70%")};
    top: 50%;
    font-size: 2rem;
    transform: translate(-50%, -50%);
  }
`;

export const Knob = styled.div<P>`
  background: ${({ onTheme }) =>
    onTheme === "LIGHT" ? "rgba(0, 0, 0, 0.4)" : "rgba(255, 255, 255, 0.4)"};
  width: 8rem;
  height: 100%;
  transition: ${({ theme }) => theme.transition.mainTransition};
  transform: ${({ onTheme }) =>
    onTheme === "LIGHT" ? "translateX(0%)" : "translateX(80%)"};
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 1rem;
  ${({ theme }) => theme.shadow.elevations[2]};
`;
