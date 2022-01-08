import React, { FunctionComponent } from 'react'
import { ThemeProvider } from 'styled-components'

import Navbar from '../components/navbar/Navbar'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme/theme'

const App: FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
    </>
  )
}

export default App
