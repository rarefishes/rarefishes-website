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

            <PathRelease>Starting the collection with the first 30 fishes drop.</PathRelease>
          </Path>

          <Path className="second-line">
            <PathTitle>Second Drop</PathTitle>

            <PathDate>
              <span>?</span>
            </PathDate>

            <PathRelease>Second drop available after 20% fishes sold.</PathRelease>
          </Path>

          <Path>
            <PathTitle>Custom Minting</PathTitle>

            <PathDate>
              <span>?</span>
            </PathDate>

            <PathRelease>Starting the collection with the first 30 fishes drop.</PathRelease>
          </Path>
        </RoadmapSection>
      </RoadmapWrapper>
    </Wrapper>
  )
}

export default Roadmap
