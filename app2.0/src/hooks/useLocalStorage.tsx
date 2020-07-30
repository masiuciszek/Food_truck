import * as React from "react";

type UseLocalStorageReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

export default (
  key: string,
  initialValue: string,
): UseLocalStorageReturnType => {
  const item =
    typeof window === "object" ? window.localStorage.getItem(key) : null;

  const [value, setValue] = React.useState(item || initialValue);

  React.useEffect(() => {
    if (!item) {
      setValue(initialValue);
    }

    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
};
