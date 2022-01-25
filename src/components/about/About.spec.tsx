import React from 'react'

import { render } from '../../../test/test.utils'

import About from './About'

describe('About test', () => {
  it('Should render the Navbar', async () => {
    const { findByTestId } = render(<About />)

    const aboutWrapper = await findByTestId('test-about-wrapper')

    expect(aboutWrapper).toBeInTheDocument()
  })
})
