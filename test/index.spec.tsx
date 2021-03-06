import React from 'react'

import { render } from './test.utils'

import Index from '../src/pages/Index'

describe('Index page test', () => {
  it('Should render the Title', async () => {
    const { findByText } = render(<Index />)

    const title = await findByText('Join the fishing')

    expect(title).toBeInTheDocument()
  })
})
