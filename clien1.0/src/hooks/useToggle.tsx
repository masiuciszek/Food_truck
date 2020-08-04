import * as React from "react";

type UseToggleReturnType = [boolean, Fn];

const useToggle = (initialState = false): UseToggleReturnType => {
  const [state, setState] = React.useState<boolean>(initialState);

  const toggle = (): void => {
    setState(!state);
  };

  return [state, toggle];
};
export default useToggle;
