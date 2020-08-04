import styled from "styled-components";
import { handleFlex } from "./Helpers";

export const FormStyles = styled.form`
  ${handleFlex("column", "center", "flex-start")};
  padding: 2rem 1rem;
  button {
    margin: 2rem auto 0 auto;
  }
`;

export const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transition.mainTransition};
  padding: 0 1rem;
  ${({
    theme: {
      shadow: { elevations },
    },
  }) => elevations[1]};
  &[type="text"] {
    width: 43rem;
    height: 6.3rem;
    margin: 1rem 0;

    &:focus {
      width: 42rem;
      height: 6rem;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      ${({
        theme: {
          shadow: { elevations },
        },
      }) => elevations[2]};
    }
  }
  &[type="email"] {
    width: 43rem;
    height: 6.3rem;
    margin: 1rem 0;

    &:focus {
      width: 42rem;
      height: 6rem;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      ${({
        theme: {
          shadow: { elevations },
        },
      }) => elevations[2]};
    }
  }
  &[type="password"] {
    width: 43rem;
    height: 6.3rem;
    margin: 1rem 0;

    &:focus {
      width: 42rem;
      height: 6rem;
      border: 1px solid ${({ theme }) => theme.colors.secondary};
      ${({
        theme: {
          shadow: { elevations },
        },
      }) => elevations[2]};
    }
  }
  &[type="radio"] {
    opacity: 0;
    width: 0;
    height: 0;
    transition: ${(props) => props.theme.transition.mainTransition};
    &:checked + label {
      border: 0.2em solid ${(props) => props.theme.colors.text};
      padding: 1rem;
      background: ${(props) => props.theme.colors.button};
      ${(props) => props.theme.shadow.elevations[1]};
    }
  }
  font-size: 18px;
  line-height: 23px;
  outline: 0;
  &::placeholder {
    text-transform: capitalize;
    font-weight: 700;
  }
`;

export const FormGroup = styled.div`
  padding: 0.5rem 0;
  #forgot-password {
    font-size: 1.3rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.colors.button};
    border-bottom: 2px solid ${(props) => props.theme.colors.text};
    line-height: 3rem;
    letter-spacing: 0.3rem;
    cursor: pointer;
    font-weight: 500;
  }
`;

export const Label = styled.label`
  display: block;
  width: 2em;
  height: 2em;
  border-radius: 50%;
  border: 0.2em solid ${(props) => props.theme.colors.button};
  margin-right: auto;
  cursor: pointer;
  span {
    padding: 0 0 0 4rem;
  }
`;

export const FormGroupForCheckBox = styled(FormGroup)`
  ${handleFlex("row", "space-around", "center")};
  padding: 2rem 0;
  width: 60%;
`;
