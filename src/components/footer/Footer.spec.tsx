import React from 'react'

import { render } from '../../../test/test.utils'

import Footer from './Footer'

describe('Roadmap test', () => {
  it('Should render the Navbar', async () => {
    const { findByTestId } = render(<Footer />)

    const footer = await findByTestId('test-footer-wrapper')

    expect(footer).toBeInTheDocument()
  })
})
