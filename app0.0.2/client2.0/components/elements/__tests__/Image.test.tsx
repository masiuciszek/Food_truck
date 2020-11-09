import * as React from "react"
import { fireEvent, screen } from "@testing-library/react"
// import "@testing-library/jest-dom/extend-expect"

import { render } from "../../../test/testUtils"
import Image from "../Image"

describe("<Image/>", () => {
  test("should work correctly ", () => {
    const props = {
      src: "src",
      alt: "alt",
      className: "className",
      style: "border: 2px solid red",
      testId: "testId",
    }
    render(<Image {...props} />)

    const image = screen.getByTestId(props.testId)
    expect(image).toHaveAttribute("src", props.src)
    expect(image.classList.contains(props.className))
  })
})
