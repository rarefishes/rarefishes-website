import React, { FunctionComponent } from 'react'

import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import { Anchor } from '../../styles/shared/anchor/Anchor'
import { AboutWrapper, AboutTitle, CardsWrapper, Card, FishImage, Description, Name, SocialMedia } from './about.styles'

import FishNumberSixteen from '../../assets/images/rarefish-16.jpg'
import FishNumberTwentyTwo from '../../assets/images/rarefish-22.jpg'
import FishNumberTwentySeven from '../../assets/images/rarefish-27.jpg'

const About: FunctionComponent = () => {
  return (
    <Wrapper>
      <AboutWrapper data-testid="test-about-wrapper" id="about-us">
        <AboutTitle>The team</AboutTitle>

        <CardsWrapper>
          <Card>
            <FishImage src={FishNumberTwentySeven} alt="The RAREFISH number 27" />

            <Name>Vitor Hugo</Name>

            <Description>Creator & Social Media</Description>

            <Anchor color="secondary" target="_blank" href="https://instagram.com/v.torugoo">
              <SocialMedia>@v.torugoo</SocialMedia>
            </Anchor>
          </Card>

          <Card>
            <FishImage src={FishNumberSixteen} alt="The RAREFISH number 16" />

            <Name>Vinicius</Name>

            <Description>Founder & Developer</Description>

            <Anchor color="secondary" target="_blank" href="https://instagram.com/vinisaveg">
              <SocialMedia>@vinisaveg</SocialMedia>
            </Anchor>
          </Card>

          <Card>
            <FishImage src={FishNumberTwentyTwo} alt="The RAREFISH number 22" />

            <Name>Eduardo</Name>

            <Description>Creator & Artist</Description>

            <Anchor color="secondary" target="_blank" href="https://instagram.com/eduardohsart">
              <SocialMedia>@eduardohsart</SocialMedia>
            </Anchor>
          </Card>
        </CardsWrapper>
      </AboutWrapper>
    </Wrapper>
  )
}

export default About
