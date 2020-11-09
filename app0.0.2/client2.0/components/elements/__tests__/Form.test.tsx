import { screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import * as React from "react"

import { render } from "../../../test/testUtils"
import Form from "../Form"

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

  test("when register form data is provided as a props ", () => {
    const formData = {
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      password: "123456",
      confirmPassword: "confirmPassword",
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
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )

    const firstNameInput = screen.getByRole("textbox", { name: /firstname/i })
    const lastNameInput = screen.getByRole("textbox", { name: /lastname/i })
    // const passwordInput = screen.getByTestId("login-password-input")

    // userEvent.type(emailInput, "name@ex.io")
    // userEvent.type(passwordInput, "123456")
    // expect(handleChange).toHaveBeenCalled()
    // expect(handleChange).toHaveBeenCalledTimes(16) // each key press!

    // userEvent.click(screen.getByTestId("submit-btn"))
    // expect(handleSubmit).toHaveBeenCalled()
    screen.debug()
  })
})
