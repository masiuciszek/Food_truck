import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import { render } from "../../../test/testUtils"
import Form from "../Form"

// interface RegisterFormData {
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   confirmPassword: string
// }
describe("<Form/>", () => {
  test("when login form data is provided as a prop ", () => {
    const formData = {
      email: "email",
      password: "123456",
    }
    const className = "className"
    const submitText = "submitText"
    const handleChange = jest.fn()
    const handleSubmit = jest.fn()

    render(
      <Form
        formData={formData}
        className={className}
        submitText={submitText}
        isLoginForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const passwordInput = screen.getByTestId("login-password-input")

    userEvent.type(emailInput, "name@ex.io")
    userEvent.type(passwordInput, "123456")
    expect(handleChange).toHaveBeenCalled()
    expect(handleChange).toHaveBeenCalledTimes(16) // each key press!

    userEvent.click(screen.getByTestId("submit-btn"))
    expect(handleSubmit).toHaveBeenCalled()
  })
})
