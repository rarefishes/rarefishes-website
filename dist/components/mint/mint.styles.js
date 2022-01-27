import styled from "../../../snowpack/pkg/styled-components.js";
export const MintWrapper = styled.section`
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
`;
export const TextWrapper = styled.div`
  width: 50%;
  height: 100%;
  max-height: 600px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 50px;

  @media only screen and (max-width: 790px) {
    width: 100%;
    padding: 100px 0px;
    align-items: flex-start;
    order: 2;
  }

  @media only screen and (max-width: 600px) {
    padding: 100px 50px;
  }
`;
export const TextGroup = styled.div``;
export const MintTitle = styled.h2`
  text-transform: uppercase;
  margin-bottom: 25px;
`;
export const MintText = styled.p`
  margin-bottom: 25px;
  max-width: 360px;
`;
export const ImageWrapper = styled.div`
  width: 50%;
  position: relative;
  max-height: 600px;
  display: flex;

  @media only screen and (max-width: 790px) {
    width: 100%;
    order: 1;
  }
`;
export const FishesImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;
`;
