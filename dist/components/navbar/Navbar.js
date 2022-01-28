import React, {useState} from "../../../snowpack/pkg/react.js";
import {Nav, NavIcon, NavIconLines, LogoIcon, NavItemsList, NavItem, Link} from "./navbar.styles.js";
import logo from "../../assets/icons/rarefishes-logo-icon.png.proxy.js";
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return /* @__PURE__ */ React.createElement(Nav, {
    "data-testid": "test-navbar"
  }, /* @__PURE__ */ React.createElement(Link, {
    href: "/"
  }, /* @__PURE__ */ React.createElement(LogoIcon, {
    src: logo,
    alt: "RAREFISHES logo icon"
  })), /* @__PURE__ */ React.createElement(NavItemsList, {
    "data-testid": "test-navbar-items-list",
    className: `dropdown-${isNavOpen ? "enable" : "disable"}`
  }, /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    href: "#the-project"
  }, "The project")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    href: "#roadmap"
  }, "Roadmap")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    href: "#about-us"
  }, "About us")), /* @__PURE__ */ React.createElement(NavItem, null, /* @__PURE__ */ React.createElement(Link, {
    target: "_blank",
    href: "https://opensea.io/collection/rarefishes-official"
  }, "The collection"))), /* @__PURE__ */ React.createElement(NavIcon, {
    "data-testid": "test-navbar-icon",
    onClick: () => setIsNavOpen(!isNavOpen)
  }, /* @__PURE__ */ React.createElement(NavIconLines, {
    "data-testid": "test-navbar-icon-lines",
    className: `nav-icon-${isNavOpen ? "white" : "black"}`
  })));
};
export default Navbar;
