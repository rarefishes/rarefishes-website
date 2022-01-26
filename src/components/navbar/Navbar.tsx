import React, { FunctionComponent, useState } from 'react'

import { Nav, NavIcon, NavIconLines, LogoIcon, NavItemsList, NavItem, Link } from './navbar.styles'
import logo from '../../assets/icons/rarefishes-logo-icon.png'

const Navbar: FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <Nav data-testid="test-navbar">
      <Link href="/">
        <LogoIcon src={logo} alt="RAREFISHES logo icon" />
      </Link>

      <NavItemsList data-testid="test-navbar-items-list" className={`dropdown-${isNavOpen ? 'enable' : 'disable'}`}>
        <NavItem>
          <Link href="#the-project">The project</Link>
        </NavItem>
        <NavItem>
          <Link href="#roadmap">Roadmap</Link>
        </NavItem>
        <NavItem>
          <Link href="#about-us">About us</Link>
        </NavItem>
        <NavItem>
          <Link target="_blank" href="https://opensea.io/rarefishesofficial">
            The collection
          </Link>
        </NavItem>
      </NavItemsList>

      <NavIcon data-testid="test-navbar-icon" onClick={() => setIsNavOpen(!isNavOpen)}>
        <NavIconLines data-testid="test-navbar-icon-lines" className={`nav-icon-${isNavOpen ? 'white' : 'black'}`} />
      </NavIcon>
    </Nav>
  )
}

export default Navbar
