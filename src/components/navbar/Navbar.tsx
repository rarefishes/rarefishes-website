import React, { FunctionComponent } from 'react'

import { Nav, NavIcon, NavIconLines, LogoIcon, NavItemsList, NavItem, Link } from './navbar.styles'
import logo from '../../assets/icons/rarefishes-logo-icon.png'

const Navbar: FunctionComponent = () => {
  return (
    <Nav data-testid="test-navbar">
      <Link href="/">
        <LogoIcon src={logo} alt="RAREFISHES logo icon" />
      </Link>

      <NavItemsList data-testid="test-navbar-itens-list">
        <NavItem>
          <Link href="#project">The project</Link>
        </NavItem>
        <NavItem>
          <Link href="#roadmap">Roadmap</Link>
        </NavItem>
        <NavItem>
          <Link href="#aboutus">About us</Link>
        </NavItem>
        <NavItem>
          <Link target="_blank" href="https://opensea.io/vinisaveg">
            The collection
          </Link>
        </NavItem>
      </NavItemsList>

      <NavIcon data-testid="test-navbar-icon">
        <NavIconLines />
      </NavIcon>
    </Nav>
  )
}

export default Navbar
