import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../styles/shared/link/Link.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {
  ProjectWrapper,
  FishesWrapper,
  FishImage,
  AboutWrapper,
  TextWrapper,
  AboutTitle,
  AboutText
} from "./project.styles.js";
import FishNumberThree from "../../assets/images/rarefish-3.jpg.proxy.js";
import FishNumberSix from "../../assets/images/rarefish-6.jpg.proxy.js";
import FishNumberEleven from "../../assets/images/rarefish-11.jpg.proxy.js";
import FishNumberTwentyEight from "../../assets/images/rarefish-28.jpg.proxy.js";
const Project = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(ProjectWrapper, {
    id: "the-project",
    "data-testid": "test-project-wrapper"
  }, /* @__PURE__ */ React.createElement(FishesWrapper, {
    "data-testid": "test-project-fish-images"
  }, /* @__PURE__ */ React.createElement(FishImage, {
    alt: "The RAREFISH number 3",
    src: FishNumberThree
  }), /* @__PURE__ */ React.createElement(FishImage, {
    alt: "The RAREFISH number 6",
    src: FishNumberSix
  }), /* @__PURE__ */ React.createElement(FishImage, {
    alt: "The RAREFISH number 11",
    src: FishNumberEleven
  }), /* @__PURE__ */ React.createElement(FishImage, {
    alt: "The RAREFISH number 28",
    src: FishNumberTwentyEight
  })), /* @__PURE__ */ React.createElement(AboutWrapper, null, /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement(AboutTitle, null, "What is a RAREFISH?"), /* @__PURE__ */ React.createElement(AboutText, null, "A RAREFISH is a unique fish in a weekly drop family of fishes. There is not much space in this aquarium, so go get yours!"), /* @__PURE__ */ React.createElement(Link, {
    "data-testid": "test-project-link",
    href: "https://opensea.io/collection/rarefishesofficial",
    target: "_blank",
    color: "primary",
    fontSize: "medium",
    margin: ["0px", "0px"]
  }, "See Collection")))));
};
export default Project;
