import * as React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../utils/theme"
import AuthProvider from "../context/authState/AuthProvider"
import StoreProvider from "../context/storeState/StoreProvider"
import "@testing-library/jest-dom/extend-expect"
// import { ThemeProvider } from "my-ui-lib"
// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <AuthProvider>
        <StoreProvider>{children}</StoreProvider>
      </AuthProvider>
    </ThemeProvider>
  )
  // return (
  //   <ThemeProvider theme="light">
  //     <TranslationProvider messages={defaultStrings}>
  //       {children}
  //     </TranslationProvider>
  //   </ThemeProvider>
  // )
}

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
