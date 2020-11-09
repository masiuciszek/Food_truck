import { fireEvent, screen } from "@testing-library/react"
import * as React from "react"
import { render } from "../../../test/testUtils"
import Modal from "../Modal"

describe("<Modal/>", () => {
  const props = {
    on: false,
    toggle: jest.fn(),
    dataTestId: "dataTestId",
    title: "title",
    desc: "desc",
  }
  test("should work correctly ", () => {
    render(<Modal {...props} />)

    screen.getByText(props.title)
    screen.getByText(props.desc)

    const button = screen.getByTestId("button-modal-close")
    const modal = screen.getByTestId(props.dataTestId)

    fireEvent.click(button)
    expect(props.toggle).toHaveBeenCalled()

    expect(modal).toHaveStyle({
      opacity: "0",
      transform: "translateY(100%) translateZ(0)",
    })
  })
})
