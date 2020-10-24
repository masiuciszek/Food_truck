import { fireEvent, screen } from "@testing-library/react"
import * as React from "react"
import Title from "../Title"
import { render } from "../../../test/testUtils"

describe("<Title/>", () => {
  test("should render correctly", () => {
    const className = "className"
    const title = "title"
    const subTitle = "subTitle"
    const handleClick = jest.fn()

    render(
      <Title
        className={className}
        title={title}
        subTitle={subTitle}
        handleClick={handleClick}
        isCta
        ctaPath="path"
      />
    )

    screen.getByTestId("title-component-main")
    const titleLink = screen.getByTestId("title-action-link")
    const button = screen.getByTestId("title-action-button")

    screen.getByText(title)
    screen.getByText(subTitle)

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()

    expect(titleLink.textContent).toBe("path")
  })
})
