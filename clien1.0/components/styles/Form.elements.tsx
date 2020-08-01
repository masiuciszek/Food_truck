import styled from "styled-components";
import { handleFlex } from "./Helpers";

export const FormStyles = styled.form`
  ${handleFlex("column", "center", "flex-start")};

  padding: 2rem 1rem;
  button {
    margin: 2rem auto 0 auto;
  }
`;

export const Label = styled.label``;

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
  }
  &[type="email"] {
    width: 43rem;
    height: 6.3rem;
    margin: 1rem 0;
  }
  &[type="password"] {
    width: 43rem;
    height: 6.3rem;
    margin: 1rem 0;
  }
  font-size: 18px;
  line-height: 23px;
  outline: 0;
  &::placeholder {
    text-transform: capitalize;
    font-weight: 700;
  }

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
`;

export const FormGroup = styled.div``;

export const FormGroupForCheckBox = styled(FormGroup)``;
