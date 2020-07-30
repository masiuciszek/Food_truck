import React from "react";
import { useDispatch } from "react-redux";
import useTheme from "src/hooks/useTheme";
import { ToggleStyles, Knob } from "./styles/Toggle.switch.styles";
import styled from "styled-components";
import { handleTheme } from "src/store/page/page.actions";

const TogglerStyles = styled.div`
  display: flex;

  flex: 1;
`;

const ThemeToggler = () => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useTheme("theme", "LIGHT");

  return (
    <TogglerStyles>
      <ToggleStyles onTheme={theme}>
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

        <Knob onTheme={theme} />
      </ToggleStyles>
    </TogglerStyles>
  );
};

export default ThemeToggler;
