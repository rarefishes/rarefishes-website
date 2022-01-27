import React from "../../../snowpack/pkg/react.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {FooterWrapper, LogoWrapper, LogoImage, LogoText} from "./footer.styles.js";
import Logo from "../../assets/icons/rarefishes-logo-icon.png.proxy.js";
const Footer = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(FooterWrapper, {
    "data-testid": "test-footer-wrapper"
  }, /* @__PURE__ */ React.createElement(LogoWrapper, null, /* @__PURE__ */ React.createElement(LogoImage, {
    src: Logo,
    alt: "The RAREFISHES logo"
  }), /* @__PURE__ */ React.createElement(LogoText, null, "RAREFISHES"))));
};
export default Footer;
