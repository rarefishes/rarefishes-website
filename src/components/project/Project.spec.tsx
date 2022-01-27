import React from 'react'

import { render } from '../../../test/test.utils'

import Project from './Project'

describe('Project test', () => {
  it('Should render the Project section', async () => {
    const { findByTestId } = render(<Project />)

    const projectSection = await findByTestId('test-project-wrapper')

    expect(projectSection).toBeInTheDocument()
  })

  it('Should render the Project section', async () => {
    const { findByTestId } = render(<Project />)

    const projectFishImagesWrapper = await findByTestId('test-project-fish-images')

    expect(projectFishImagesWrapper).toBeInTheDocument()
    expect(projectFishImagesWrapper.children.length).toBe(4)
  })

  it('Should have a link to the collection', async () => {
    const { findByTestId } = render(<Project />)

    const projectCollectionLink = await findByTestId('test-project-link')

    expect(projectCollectionLink).toBeVisible()
    expect(projectCollectionLink).toHaveAttribute('href', 'https://opensea.io/collection/rarefishesofficial')
  })
})
