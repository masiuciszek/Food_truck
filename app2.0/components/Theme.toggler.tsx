import React from "react";
import useTheme from "src/hooks/useTheme";

const ThemeToggler = () => {
  const [theme, setTheme] = useTheme("theme", "light", () => {});
  return (
    <div>
      <h1>Theme Toggler</h1>
    </div>
  );
};

export default ThemeToggler;
