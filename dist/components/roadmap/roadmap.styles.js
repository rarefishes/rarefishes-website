import styled from "../../../snowpack/pkg/styled-components.js";
export const RoadmapWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 150px 0px 100px 0px;
  background-color: #efefef;

  margin-bottom: 100px;
`;
export const RoadmapSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .first-line {
    :after {
      content: '';
      position: absolute;
      left: 22%;
      top: 50%;
      width: 25%;
      height: 1px;
      background-color: black;
    }
  }

  .second-line {
    :after {
      content: '';
      position: absolute;
      left: 52%;
      top: 50%;
      width: 28%;
      height: 1px;
      background-color: black;
    }
  }
`;
export const Path = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 28%;
  margin: 0 20px;

  @media only screen and (max-width: 790px) {
    width: 20%;
    margin: 0 30px;
  }

  @media only screen and (max-width: 500px) {
    width: 30%;
    margin: 0 15px;
  }
`;
export const PathTitle = styled.h3`
  margin-bottom: 25px;
  min-height: 50px;

  @media only screen and (max-width: 500px) {
  }
`;
export const PathDate = styled.div`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.background};
  margin-bottom: 25px;
  z-index: 1;
`;
export const PathRelease = styled.div`
  max-width: 250px;
  min-height: 100px;

  @media only screen and (max-width: 790px) {
    max-width: 180px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;
