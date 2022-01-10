import React from 'react'

import { render } from '../../../test/test.utils'

import Navbar from './Navbar'

describe('Navbar test', () => {
  it('Should render the Navbar', async () => {
    const { findByTestId } = render(<Navbar />)

    const navbar = await findByTestId('test-navbar')

    expect(navbar).toBeInTheDocument()
  })

  it('Should render the Navbar Logo', async () => {
    const { findByAltText } = render(<Navbar />)

    const logo = await findByAltText('RAREFISHES logo icon')

    expect(logo).toBeInTheDocument()
  })

  it('Should render the Navbar Items List component', async () => {
    const { findByTestId } = render(<Navbar />)

    const navItemsList = await findByTestId('test-navbar-itens-list')

    expect(navItemsList).toBeInTheDocument()
  })

  it('Should render the Navbar Icon', async () => {
    const { findByTestId } = render(<Navbar />)

    const navbarIcon = await findByTestId('test-navbar-icon')

    expect(navbarIcon).toBeInTheDocument()
  })
})
