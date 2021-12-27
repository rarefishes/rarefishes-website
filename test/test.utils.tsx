import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme/theme'

const AppThemeProvider: FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/* eslint "@typescript-eslint/explicit-function-return-type": "off" */
const testRender = (ui: ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: AppThemeProvider, ...options })

export * from '@testing-library/react'

export { testRender as render }
