import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./assets/themes/default"
import { GlobalStyle } from "./assets/global"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <h1>DT Money to track my expenses!</h1>
    </ThemeProvider>
  )
}