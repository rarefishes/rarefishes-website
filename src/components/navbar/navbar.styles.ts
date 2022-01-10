import styled from 'styled-components'

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 50px;
`

export const NavIcon = styled.div`
  position: absolute;
  display: flex;
  right: 50px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 200ms ease;

  :active {
    transform: scale(1.04);
  }
`

export const NavIconLines = styled.div`
  display: block;
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.text.black};
  transition: all 200ms ease;

  :before,
  :after {
    content: '';
    height: 3px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.text.black};
    margin-top: 8px;
    display: block;
  }

  :before {
    transform: translateY(1px);
  }
`

export const LogoIcon = styled.img`
  height: 45px;
  transition: all 200ms ease;

  :active {
    transform: scale(1.04);
  }
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
