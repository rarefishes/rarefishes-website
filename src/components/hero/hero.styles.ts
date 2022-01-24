import styled from 'styled-components'

export const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0px;
  margin: 0 auto;
`

export const TextWrapper = styled.div`
  width: 50%;

  @media only screen and (max-width: 790px) {
    width: 100%;
  }
`

export const HeroTitle = styled.h1`
  font-size: 48px;
  text-transform: uppercase;
  margin-bottom: 25px;
`

export const HeroText = styled.h2`
  font-size: 24px;
  font-weight: 400;
  max-width: 500px;
  margin-bottom: 25px;
`

export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;

  @media only screen and (max-width: 790px) {
    display: none;
  }
`

export const HeroImage = styled.img`
  width: 100%;
  max-width: 600px;
  margin-left: 25px;
`
