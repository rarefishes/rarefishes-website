import React from 'react'

import { render } from '../../../test/test.utils'

import Hero from './Hero'

describe('Hero test', () => {
  it('Should render the Hero', async () => {
    const { findByTestId } = render(<Hero />)

    const hero = await findByTestId('test-hero')

    expect(hero).toBeInTheDocument()
  })

  it('Should have a link to the collection', async () => {
    const { findByTestId } = render(<Hero />)

    const link = await findByTestId('test-hero-link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveTextContent('Fish now')
    expect(link).toHaveAttribute('href', 'https://opensea.io/collection/rarefishes-official')
  })
})
