import styled, {css} from "../../../../snowpack/pkg/styled-components.js";
export const ButtonStyles = css`
  font-size: ${(props) => String(props.theme.textSize[props.fontSize]) + "px"};
  background: ${(props) => props.color === "primary" ? props.theme.colors.primary : props.theme.colors.secondary};
  color: ${(props) => props.color === "primary" ? props.theme.colors.text.black : props.theme.colors.text.white};
  border: none;
  padding: 10px 20px;
  margin: ${(props) => props.margin.join(" ") || 0};
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 200ms ease;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid ${(props) => props.color === "primary" ? props.theme.colors.text.black : "transparent"};

  &&:hover {
    opacity: 0.9;
  }

  &&:active {
    opacity: 0.8;
  }
`;
export const Button = styled.button`
  ${ButtonStyles}
`;
