import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from './test.utils'

import Index from '../src/pages/Index'

describe('Example test', () => {
  it('Should log a Hello test!', () => {
    const message = 'Hello test!'

    expect(message).toBe('Hello test!')
    expect(message).not.toBe('Hello world!')
  })

  it('Should render the App component', async () => {
    const { findByText } = render(<Index />)

    const app = await findByText('Hello from rarefishes.crypto')

    expect(app).toBeInTheDocument()
  })
})
