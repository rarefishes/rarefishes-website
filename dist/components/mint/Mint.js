import React from "../../../_snowpack/pkg/react.js";
import {Link} from "../../styles/shared/link/Link.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {MintWrapper, TextWrapper, TextGroup, MintTitle, MintText, ImageWrapper, FishesImage} from "./mint.styles.js";
import RarefishesImage from "../../assets/images/rarefishes.gif.proxy.js";
const Mint = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(MintWrapper, {
    "data-testid": "test-mint-wrapper"
  }, /* @__PURE__ */ React.createElement(TextWrapper, null, /* @__PURE__ */ React.createElement(TextGroup, null, /* @__PURE__ */ React.createElement(MintTitle, null, "Try to catch a RAREFISH!"), /* @__PURE__ */ React.createElement(MintText, null, "Connect your wallet and catch a RAREFISH while they still out there!"), /* @__PURE__ */ React.createElement(Link, {
    "data-testid": "test-mint-link",
    href: "https://opensea.io/collection/rarefishesofficial",
    target: "_blank",
    color: "primary",
    fontSize: "medium",
    margin: ["0px", "0px"]
  }, "Mint now"))), /* @__PURE__ */ React.createElement(ImageWrapper, null, /* @__PURE__ */ React.createElement(FishesImage, {
    src: RarefishesImage,
    alt: "A animated GIF with some RAREFISHES"
  }))));
};
export default Mint;
