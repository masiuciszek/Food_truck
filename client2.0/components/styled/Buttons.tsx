import styled from "styled-components";

export const Button = styled.button`
  background: ${({ theme: { colors } }) => colors.button}
    url("https://wesbos.com/static/blackgrit-15c168539fb7109ce300574e7b4b0732.png");
  color: ${({ theme: { colors } }) => colors.text};
  border: 2px solid ${({ theme: { colors } }) => colors.text};
  transition: ${({ theme: { transition } }) => transition.mainTransition};
  display: block;
  font-size: 1.4em;
  border-radius: 4px;
  ${({ theme: { shadow } }) => shadow.elevations[1]};
  cursor: pointer;
  width: 7.23em;
  &:hover {
    ${({ theme: { shadow } }) => shadow.elevations[2]};
    background: ${({ theme: { colors } }) => colors.background};
    color: ${({ theme: { colors } }) => colors.text};
    border: 2px solid ${({ theme: { colors } }) => colors.button};
  }
  &:active {
    position: relative;
    top: 7px;
  }
`;
