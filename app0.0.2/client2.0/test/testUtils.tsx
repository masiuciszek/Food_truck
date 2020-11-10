import * as React from "react"
import { render } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../utils/theme"
import AuthProvider from "../context/authState/AuthProvider"
import StoreProvider from "../context/storeState/StoreProvider"
import AppProvider from "../context/appState/appProvider"
import "@testing-library/jest-dom/extend-expect"

const Providers: React.FC = ({ children }) => {
  return (
    <AppProvider>
      <ThemeProvider theme={mainTheme}>
        <AuthProvider>
          <StoreProvider>{children}</StoreProvider>
        </AuthProvider>
      </ThemeProvider>
    </AppProvider>
  )
}

const customRender = (ui: any, options = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }
