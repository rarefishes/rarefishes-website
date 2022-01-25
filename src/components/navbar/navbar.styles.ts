import styled from 'styled-components'

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  max-width: 1520px;
  margin: 0 auto;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0px 150px;
  z-index: 9;

  @media only screen and (max-width: 1024px) {
    padding: 0px 50px;
  }

  @media only screen and (max-width: 780px) {
    .dropdown-enable {
      transform: translateY(0px);
    }

    .dropdown-disable {
      transform: translateY(-350px);
    }

    .nav-icon-white {
      background-color: ${(props) => props.theme.colors.text.white};

      :before,
      :after {
        background-color: ${(props) => props.theme.colors.text.white};
      }
    }

    .nav-icon-black {
      background-color: ${(props) => props.theme.colors.text.black};

      :before,
      :after {
        background-color: ${(props) => props.theme.colors.text.black};
      }
    }
  }
`

export const NavIcon = styled.div`
  position: absolute;
  display: flex;
  top: 30px;
  right: 50px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: all 200ms ease;

  :active {
    transform: scale(1.04);
  }

  @media only screen and (min-width: 780px) {
    display: none;
  }
`

export const NavIconLines = styled.div`
  display: block;
  height: 3px;
  width: 100%;
  transition: all 200ms ease;

  :before,
  :after {
    content: '';
    height: 3px;
    width: 100%;
    margin-top: 8px;
    display: block;
  }

  :before {
    transform: translateY(1px);
  }
`

export const LogoIcon = styled.img`
  position: absolute;
  top: 20px;
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
  transition: all 200ms ease;

  @media only screen and (max-width: 780px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 350px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

export const NavItem = styled.li`
  margin: 0px 15px;
  font-size: ${(props) => props.theme.textSize.small};
  text-align: center;

  &:last-child {
    margin-right: 0px;
  }

  @media only screen and (max-width: 780px) {
    margin: 15px;

    &:last-child {
      margin-right: 15px;
    }
  }
`

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text.black};

  @media only screen and (max-width: 780px) {
    color: ${(props) => props.theme.colors.text.white};
  }
`
