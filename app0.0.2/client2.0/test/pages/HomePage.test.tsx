import React from "react"
import { screen } from "@testing-library/react"
import HomePage from "../../pages"
import { render } from "../testUtils"

global.fetch = jest.fn(() => {})
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
//   })
// );
describe("<HomePage/>", () => {
  test("renders correctly", () => {
    const token = "token"
    render(<HomePage token={token} />)
    screen.getByText(/sick Tastes/i)
    screen.getByText(/All different tastes/i)

    const heroImage = screen.getByTestId("home-hero-image")

    expect(heroImage.src).toBe("http://localhost/home-hero.png")
  })
})
