import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 1520px;
  padding: 0 150px;
  position: relative;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 600px) {
    padding: 0px;
  }
`
