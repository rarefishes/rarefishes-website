import React from "../../../snowpack/pkg/react.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {Anchor} from "../../styles/shared/anchor/Anchor.js";
import {AboutWrapper, AboutTitle, CardsWrapper, Card, FishImage, Description, Name, SocialMedia} from "./about.styles.js";
import FishNumberSixteen from "../../assets/images/rarefish-16.jpg.proxy.js";
import FishNumberTwentyTwo from "../../assets/images/rarefish-22.jpg.proxy.js";
import FishNumberTwentySeven from "../../assets/images/rarefish-27.jpg.proxy.js";
const About = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(AboutWrapper, {
    "data-testid": "test-about-wrapper",
    id: "about-us"
  }, /* @__PURE__ */ React.createElement(AboutTitle, null, "The team"), /* @__PURE__ */ React.createElement(CardsWrapper, null, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(FishImage, {
    src: FishNumberTwentySeven,
    alt: "The RAREFISH number 27"
  }), /* @__PURE__ */ React.createElement(Name, null, "Vitor Hugo"), /* @__PURE__ */ React.createElement(Description, null, "Creator & Social Media"), /* @__PURE__ */ React.createElement(Anchor, {
    color: "secondary",
    target: "_blank",
    href: "https://instagram.com/v.torugoo"
  }, /* @__PURE__ */ React.createElement(SocialMedia, null, "@v.torugoo"))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(FishImage, {
    src: FishNumberSixteen,
    alt: "The RAREFISH number 16"
  }), /* @__PURE__ */ React.createElement(Name, null, "Vinicius"), /* @__PURE__ */ React.createElement(Description, null, "Founder & Developer"), /* @__PURE__ */ React.createElement(Anchor, {
    color: "secondary",
    target: "_blank",
    href: "https://instagram.com/vinisaveg"
  }, /* @__PURE__ */ React.createElement(SocialMedia, null, "@vinisaveg"))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(FishImage, {
    src: FishNumberTwentyTwo,
    alt: "The RAREFISH number 22"
  }), /* @__PURE__ */ React.createElement(Name, null, "Eduardo"), /* @__PURE__ */ React.createElement(Description, null, "Creator & Artist"), /* @__PURE__ */ React.createElement(Anchor, {
    color: "secondary",
    target: "_blank",
    href: "https://instagram.com/eduardohsart"
  }, /* @__PURE__ */ React.createElement(SocialMedia, null, "@eduardohsart"))))));
};
export default About;
