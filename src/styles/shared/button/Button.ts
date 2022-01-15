import styled, { css } from 'styled-components'

export interface ButtonProps {
  fontSize: 'small' | 'medium' | 'big' | 'title'
  color: 'primary' | 'secondary'
  margin?: string[]
}

export const ButtonStyles = css<ButtonProps>`
  font-size: ${(props) => String(props.theme.textSize[props.fontSize]) + 'px'};
  background: ${(props) => (props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
  color: ${(props) => (props.color === 'primary' ? props.theme.colors.text.black : props.theme.colors.text.white)};
  border: none;
  padding: 10px 20px;
  margin: ${(props) => props.margin.join(' ') || 0};
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 200ms ease;
  text-transform: uppercase;

  &&:hover {
    opacity: 0.9;
  }

  &&:active {
    opacity: 0.8;
  }
`

export const Button = styled.button<ButtonProps>`
  ${ButtonStyles}
`
