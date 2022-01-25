import styled from 'styled-components'

export interface AnchorProps {
  color: 'primary' | 'secondary'
}

export const Anchor = styled.a<AnchorProps>`
  color: ${(props) => (props.color === 'primary' ? props.theme.colors.primary : props.theme.colors.secondary)};
`
