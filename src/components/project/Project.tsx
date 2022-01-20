import React, { FunctionComponent } from 'react'

import { Link } from '../../styles/shared/link/Link'
import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import {
  ProjectWrapper,
  FishesWrapper,
  FishImage,
  AboutWrapper,
  TextWrapper,
  AboutTitle,
  AboutText
} from './project.styles'

import FishNumberThree from '../../assets/images/rarefish-3.jpg'
import FishNumberSix from '../../assets/images/rarefish-6.jpg'
import FishNumberEleven from '../../assets/images/rarefish-11.jpg'
import FishNumberTwentyEight from '../../assets/images/rarefish-28.jpg'

const Project: FunctionComponent = () => {
  return (
    <Wrapper>
      <ProjectWrapper>
        <FishesWrapper>
          <FishImage alt="The RAREFISH number 3" src={FishNumberThree} />
          <FishImage alt="The RAREFISH number 6" src={FishNumberSix} />
          <FishImage alt="The RAREFISH number 11" src={FishNumberEleven} />
          <FishImage alt="The RAREFISH number 28" src={FishNumberTwentyEight} />
        </FishesWrapper>

        <AboutWrapper>
          <TextWrapper>
            <AboutTitle>What is a RAREFISH?</AboutTitle>

            <AboutText>
              A RAREFISH is a unique fish in a family of 100 to catch for each drop. There is not much space in this
              aquarium, so go get yours!
            </AboutText>

            <Link
              data-testid="test-project-link"
              href="https://opensea.io/collection/rarefishes"
              target="_blank"
              color="primary"
              fontSize="medium"
              margin={['0px', '0px']}
            >
              See Collection
            </Link>
          </TextWrapper>
        </AboutWrapper>
      </ProjectWrapper>
    </Wrapper>
  )
}

export default Project
