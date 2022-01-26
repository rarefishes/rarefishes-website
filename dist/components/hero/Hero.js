import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../styles/shared/link/Link.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {HeroWrapper, TextWrapper, HeroTitle, HeroText, ImageWrapper, HeroImage} from "./hero.styles.js";
import HeroFish from "../../assets/images/hero-fish.png.proxy.js";
const Hero = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(HeroWrapper, {
    "data-testid": "test-hero"
  }, /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement(HeroTitle, null, "Join the fishing"), /* @__PURE__ */ React.createElement(HeroText, null, "Catch all the rarefishes you can on this brand new NFT project."), /* @__PURE__ */ React.createElement(Link, {
    "data-testid": "test-hero-link",
    href: "https://opensea.io/collection/rarefishesofficial",
    target: "_blank",
    color: "secondary",
    fontSize: "medium",
    margin: ["0px", "0px"]
  }, "Fish now")), /* @__PURE__ */ React.createElement(ImageWrapper, null, /* @__PURE__ */ React.createElement(HeroImage, {
    src: HeroFish,
    alt: "A one of a kind grey RAREFISH"
  }))));
};
export default Hero;
