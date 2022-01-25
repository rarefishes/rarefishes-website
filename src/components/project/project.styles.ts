import styled from 'styled-components'

export const ProjectWrapper = styled.section`
  width: 100%;
  height: 600px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media only screen and (max-width: 790px) {
    flex-direction: column;
    height: auto;
  }
`

export const FishesWrapper = styled.div`
  width: 50%;
  max-height: 600px;
  position: relative;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 790px) {
    width: 100%;
  }
`

export const FishImage = styled.img`
  width: 50%;
  transition: all 200ms ease;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.27);
    z-index: 1;
  }
`

export const AboutWrapper = styled.div`
  width: 50%;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;

  @media only screen and (max-width: 790px) {
    width: 100%;
    padding: 100px 0px;
    align-items: flex-start;
  }
`

export const TextWrapper = styled.div``

export const AboutTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 25px;
`

export const AboutText = styled.p`
  margin-bottom: 25px;
  max-width: 360px;
`
