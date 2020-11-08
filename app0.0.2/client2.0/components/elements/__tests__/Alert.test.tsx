import { fireEvent, screen } from "@testing-library/react"
import * as React from "react"

import { render } from "../../../test/testUtils"
import Alert from "../Alert"

describe("<Alert/>", () => {
  test("should work correctly ", () => {
    render(<Alert />)

    const alert = screen.getByTestId("alert-message")
    screen.getByText(/oops/)

    const style = window.getComputedStyle(alert)

    expect(style.opacity).toBe("0")
    expect(style.transform).toBe("translateX(-100px) translateZ(0)")
  })

  test("when props is given", () => {
    const props = {
      message: "message",
      messageSecondary: "messageSecondary",
      showDeleteActions: true,
      fn: jest.fn(),
    }

    render(<Alert {...props} />)

    expect(screen.getByText(props.message)).toBeDefined()
    expect(screen.getByText(props.messageSecondary)).toBeDefined()

    const yesBtn = screen.getByTestId("yes-btn")
    screen.getByTestId("no-btn")

    fireEvent.click(yesBtn)
    expect(props.fn).toHaveBeenCalled()
  })
})
