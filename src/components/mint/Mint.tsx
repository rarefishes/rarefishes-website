import React, { FunctionComponent } from 'react'

import { Link } from '../../styles/shared/link/Link'
import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import { MintWrapper, TextWrapper, TextGroup, MintTitle, MintText, ImageWrapper, FishesImage } from './mint.styles'

import RarefishesImage from '../../assets/images/rarefishes.gif'

const Mint: FunctionComponent = () => {
  return (
    <Wrapper>
      <MintWrapper data-testid="test-mint-wrapper">
        <TextWrapper>
          <TextGroup>
            <MintTitle>Try to catch a RAREFISH!</MintTitle>

            <MintText>Connect your wallet and catch a RAREFISH while they still out there!</MintText>

            <Link
              data-testid="test-mint-link"
              href="https://opensea.io/collection/rarefishes"
              target="_blank"
              color="primary"
              fontSize="medium"
              margin={['0px', '0px']}
            >
              Mint now
            </Link>
          </TextGroup>
        </TextWrapper>

        <ImageWrapper>
          <FishesImage src={RarefishesImage} alt="A animated GIF with some RAREFISHES" />
        </ImageWrapper>
      </MintWrapper>
    </Wrapper>
  )
}

export default Mint
