import React from 'react'
import MyRoutes from './MyRoutes'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 2000,
    },
  }
})

function App() {
  return (
    <>

      <ThemeProvider theme={theme}>
        <MyRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
