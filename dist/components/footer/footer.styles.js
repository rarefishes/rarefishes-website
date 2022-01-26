import styled from "../../../_snowpack/pkg/styled-components.js";
export const FooterWrapper = styled.footer`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.secondary};
`;
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoImage = styled.img`
  width: 40px;
  margin-right: 10px;
`;
export const LogoText = styled.h4`
  color: ${(props) => props.theme.colors.text.white};
`;
