import React, { FunctionComponent } from 'react'

import { Wrapper } from '../../styles/shared/wrapper/Wrapper'
import { FooterWrapper, LogoWrapper, LogoImage, LogoText } from './footer.styles'

import Logo from '../../assets/icons/rarefishes-logo-icon.png'

const Footer: FunctionComponent = () => {
  return (
    <Wrapper>
      <FooterWrapper>
        <LogoWrapper>
          <LogoImage src={Logo} alt="The RAREFISHES logo" />
          <LogoText>RAREFISHES</LogoText>
        </LogoWrapper>
      </FooterWrapper>
    </Wrapper>
  )
}

export default Footer
