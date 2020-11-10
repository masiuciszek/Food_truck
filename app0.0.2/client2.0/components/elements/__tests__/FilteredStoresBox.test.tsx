import { screen } from "@testing-library/react"
import * as React from "react"
import { render } from "../../../test/testUtils"
import FilteredStoresBox from "../FilteredStoresBox"

describe("<FilteredStoresBox/>", () => {
  test("when login form data is provided as a prop ", () => {
    render(<FilteredStoresBox />)

    const wrapper = screen.getByTestId("styled-store-box-component")

    expect(wrapper).toHaveStyle({
      opacity: "0",
      transform: "translateX(-100%) translateZ(0)",
    })
  })
})
