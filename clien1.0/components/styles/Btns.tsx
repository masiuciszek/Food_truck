import styled from "styled-components";

export const Btn = styled.button`
  font-size: 1.6rem;
  display: block;
  width: 16rem;
  padding: 0.6rem 0.8rem;
  text-align: center;
  transition: ${({ theme }) => theme.transition.mainTransition};
  color: ${({ theme }) => theme.colors.background};
  background: ${({ theme }) => theme.colors.button};
  cursor: pointer;
  border: 2px solid transparent;
  border-radius: 0.4rem;
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.text};
    width: 15.5rem;
    transform: scale(1.1);
  }
  &:active {
    position: relative;
    top: 12px;
  }
`;
