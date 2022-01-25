import React, { FunctionComponent } from 'react'

import Hero from '../components/hero/Hero'
import Project from '../components/project/Project'
import Mint from '../components/mint/Mint'
import Roadmap from '../components/roadmap/Roadmap'

const Index: FunctionComponent = () => {
  return (
    <>
      <Hero />
      <Project />
      <Mint />
      <Roadmap />
    </>
  )
}

export default Index
