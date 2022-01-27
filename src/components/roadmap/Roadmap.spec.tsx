import React from 'react'

import { render } from '../../../test/test.utils'

import Roadmap from './Roadmap'

describe('Roadmap test', () => {
  it('Should render the Navbar', async () => {
    const { findByTestId } = render(<Roadmap />)

    const roadmap = await findByTestId('test-roadmap-wrapper')

    expect(roadmap).toBeInTheDocument()
  })
})
