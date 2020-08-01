import React from "react";
import { useDispatch } from "react-redux";
import useTheme from "src/hooks/useTheme";
import { ToggleStyles, Knob } from "./styles/Toggle.switch.styles";
import styled from "styled-components";
import { handleTheme } from "src/store/page/page.actions";
import LoginRegister from "./Login.register";

const TogglerStyles = styled.div`
  display: flex;
  flex: 2;
  padding: 0.5rem 0;
`;

const ThemeToggler = () => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useTheme("theme", "LIGHT");

  return (
    <TogglerStyles>
      <LoginRegister />
      <ToggleStyles themeProp={theme}>
        {theme === "LIGHT" ? (
          <button
            onClick={() => {
              setTheme("DARK");
              dispatch(handleTheme(theme));
            }}>
            🌑
          </button>
        ) : (
          <button
            onClick={() => {
              setTheme("LIGHT");
              dispatch(handleTheme(theme));
            }}>
            🌝
          </button>
        )}

        <Knob themeProp={theme} />
      </ToggleStyles>
    </TogglerStyles>
  );
};

export default ThemeToggler;
