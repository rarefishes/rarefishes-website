import React from "../../../snowpack/pkg/react.js";
import {Wrapper} from "../../styles/shared/wrapper/Wrapper.js";
import {RoadmapWrapper, RoadmapSection, Path, PathTitle, PathDate, PathRelease} from "./roadmap.styles.js";
const Roadmap = () => {
  return /* @__PURE__ */ React.createElement(Wrapper, null, /* @__PURE__ */ React.createElement(RoadmapWrapper, {
    id: "roadmap",
    "data-testid": "test-roadmap-wrapper"
  }, /* @__PURE__ */ React.createElement(RoadmapSection, null, /* @__PURE__ */ React.createElement(Path, {
    className: "first-line"
  }, /* @__PURE__ */ React.createElement(PathTitle, null, "First Drop"), /* @__PURE__ */ React.createElement(PathDate, null, /* @__PURE__ */ React.createElement("span", null, "28/01")), /* @__PURE__ */ React.createElement(PathRelease, null, "Starting the collection with the first 10 fishes drop.")), /* @__PURE__ */ React.createElement(Path, {
    className: "second-line"
  }, /* @__PURE__ */ React.createElement(PathTitle, null, "Custom Minting"), /* @__PURE__ */ React.createElement(PathDate, null, /* @__PURE__ */ React.createElement("span", null, "?")), /* @__PURE__ */ React.createElement(PathRelease, null, "Custom Minting available after 25% fishes sold.")), /* @__PURE__ */ React.createElement(Path, null, /* @__PURE__ */ React.createElement(PathTitle, null, "Merch Store"), /* @__PURE__ */ React.createElement(PathDate, null, /* @__PURE__ */ React.createElement("span", null, "?")), /* @__PURE__ */ React.createElement(PathRelease, null, "Awesome Merch Store after 50% fishes sold.")))));
};
export default Roadmap;
