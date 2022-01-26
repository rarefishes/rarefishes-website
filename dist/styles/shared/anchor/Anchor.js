import styled from "../../../../_snowpack/pkg/styled-components.js";
export const Anchor = styled.a`
  color: ${(props) => props.color === "primary" ? props.theme.colors.primary : props.theme.colors.secondary};
`;
