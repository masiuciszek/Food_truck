import { useState } from "react"

type UseToggleReturnType<T> = {
  state: boolean
  toggle: T
  setStateToFalse: T
  setStateToTrue: T
}

export const useToggle = (
  initialState = false
): UseToggleReturnType<FnVoid> => {
  const [state, setState] = useState(initialState)

  const toggle = (): void => {
    setState((prev) => !prev)
  }
  const setStateToFalse = (): void => {
    setState(false)
  }
  const setStateToTrue = (): void => {
    setState(true)
  }

  return { state, toggle, setStateToFalse, setStateToTrue }
}
