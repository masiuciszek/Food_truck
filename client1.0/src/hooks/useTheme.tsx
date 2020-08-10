import * as React from "react";
import { useDispatch } from "react-redux";
import { handleTheme } from "src/store/page/page.actions";
import useLocalStorage from "./useLocalStorage";

type UseThemeReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

const useTheme = (
  themeKey: string,
  initialThemeValue: string,
): UseThemeReturnType => {
  const [theme, setTheme] = useLocalStorage(themeKey, initialThemeValue);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(handleTheme(theme));
  }, [theme]);

  return [theme, setTheme];
};
export default useTheme;
