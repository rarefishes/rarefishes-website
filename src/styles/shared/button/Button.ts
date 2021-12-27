import styled from 'styled-components'

interface ButtonProps {
  fontSize: 'small' | 'medium' | 'big' | 'title'
  color: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  font-size: ${(props) => String(props.theme.textSize[props.fontSize]) + 'px'};
  background: ${(props) => (props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
  color: ${(props) => (props.color === 'primary' ? props.theme.colors.text.black : props.theme.colors.text.white)};
  border: none;
  padding: 10px;
  cursor: pointer;
`
