import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import Navbar from '../components/navbar/Navbar'
import Index from '../pages/Index'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme/theme'

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />

        <Index />
      </ThemeProvider>
    </>
  )
}

export default App
