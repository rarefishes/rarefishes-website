import styled from 'styled-components'

export const Nav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
`

export const LogoIcon = styled.img`
  height: 45px;
`

export const LogoTitle = styled.h1`
  margin-left: 5px;
  font-size: 20px;
  ${(props) => props.theme.colors.text.black}
`

export const NavItemsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const NavItem = styled.li`
  margin: 0px 15px;
  font-size: ${(props) => props.theme.textSize.small};

  &:last-child {
    margin-right: 0px;
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text.black};
`
