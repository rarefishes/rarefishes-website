import React from 'react'

import { render } from '../../../test/test.utils'

import Mint from './Mint'

describe('Mint test', () => {
  it('Should render the Mint section', async () => {
    const { findByTestId } = render(<Mint />)

    const mintSection = await findByTestId('test-mint-wrapper')

    expect(mintSection).toBeInTheDocument()
  })

  it('Should have a link to the collection', async () => {
    const { findByTestId } = render(<Mint />)

    const projectCollectionLink = await findByTestId('test-mint-link')

    expect(projectCollectionLink).toBeVisible()
    expect(projectCollectionLink).toHaveAttribute('href', 'https://opensea.io/collection/rarefishes-official')
  })
})
