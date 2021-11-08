import React from "react"
import { createTheme, ThemeProvider } from "@material-ui/core/styles"

const theme = createTheme({
  typography: {
    fontSize: 25,
    fontFamily: ["Poppins", "sans-serif"].join(", "),
    body1: {
      fontSize: 25,
    },
    body2: {
      fontSize: 20,
    },
  },
  palette: {
    primary: {
      main: "#ffc0cb",
    },
    secondary: {
      main: "#ffc0cb",
    },
  },
})

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ color: "green" }}>theme.palette.primary.main: {theme.palette.primary.main} created in layout.js via createTheme</div>
      <main>{props.children}</main>
    </ThemeProvider>
  )
}

export default Layout
