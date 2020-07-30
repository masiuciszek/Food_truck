import * as React from "react";
import useLocalStorage from "./useLocalStorage";

type Fn = () => void;

type UseThemeReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export default (
  themeKey: string,
  initialThemeValue: string,
  handler: Fn,
): UseThemeReturnType => {
  const [theme, setTheme] = useLocalStorage(themeKey, initialThemeValue);

  React.useEffect(() => {
    handler();
  }, [theme]);

  return [theme, setTheme];
};
