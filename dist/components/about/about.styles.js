import styled from "../../../_snowpack/pkg/styled-components.js";
export const AboutWrapper = styled.section`
  text-align: center;
`;
export const AboutTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 50px;
`;
export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  @media only screen and (max-width: 790px) {
    flex-direction: column;
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 33.33%;
  position: relative;

  @media only screen and (max-width: 790px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
export const FishImage = styled.img`
  width: 100%;
  margin-bottom: 25px;
`;
export const Name = styled.h3`
  margin-bottom: 25px;
`;
export const Description = styled.p`
  margin-bottom: 25px;
`;
export const SocialMedia = styled.span`
  font-size: 14px;
`;
