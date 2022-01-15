import React, { FunctionComponent } from 'react'

import { Link } from '../../styles/shared/link/Link'
import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import { HeroWrapper, TextWrapper, HeroTitle, HeroText, ImageWrapper, HeroImage } from './hero.styles'
import HeroFish from '../../assets/images/hero-fish.png'

const Hero: FunctionComponent = () => {
  return (
    <Wrapper>
      <HeroWrapper>
        <TextWrapper>
          <HeroTitle>Join the fishing</HeroTitle>

          <HeroText>Catch all the rarefishes you can on this brand new NFT project.</HeroText>

          <Link href="" color="secondary" fontSize="medium" margin={['0px', '0px']}>
            Fish now
          </Link>
        </TextWrapper>
        <ImageWrapper>
          <HeroImage src={HeroFish} alt="A one of a kind grey RAREFISH" />
        </ImageWrapper>
      </HeroWrapper>
    </Wrapper>
  )
}

export default Hero
