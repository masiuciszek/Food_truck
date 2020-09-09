import * as React from "react";

type UseLocalStorageReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];

function useLocalStorage(
  key: string,
  initialValue: string,
): UseLocalStorageReturnType {
  const item =
    typeof window === "object" ? window.localStorage.getItem(key) : null;
  const [value, setValue] = React.useState<string>(item || initialValue);

  React.useEffect(() => {
    if (!item) {
      setValue(initialValue);
    }

    window.localStorage.setItem(key, value);
  }, [value, key]);

  return [value, setValue];
}

export default useLocalStorage;
