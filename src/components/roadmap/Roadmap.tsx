import React, { FunctionComponent } from 'react'

import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import { RoadmapWrapper, RoadmapSection, Path, PathTitle, PathDate, PathRelease } from './roadmap.styles'

const Roadmap: FunctionComponent = () => {
  return (
    <Wrapper>
      <RoadmapWrapper id="roadmap" data-testid="test-roadmap-wrapper">
        <RoadmapSection>
          <Path className="first-line">
            <PathTitle>First Drop</PathTitle>

            <PathDate>
              <span>28/01</span>
            </PathDate>

            <PathRelease>Starting the collection with the first 10 fishes drop.</PathRelease>
          </Path>

          <Path className="second-line">
            <PathTitle>Custom Minting</PathTitle>

            <PathDate>
              <span>?</span>
            </PathDate>

            <PathRelease>Custom Minting available after 25% fishes sold.</PathRelease>
          </Path>

          <Path>
            <PathTitle>Merch Store</PathTitle>

            <PathDate>
              <span>?</span>
            </PathDate>

            <PathRelease>Awesome Merch Store after 50% fishes sold.</PathRelease>
          </Path>
        </RoadmapSection>
      </RoadmapWrapper>
    </Wrapper>
  )
}

export default Roadmap
