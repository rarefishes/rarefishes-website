import React from "../../snowpack/pkg/react.js";
import {ThemeProvider} from "../../snowpack/pkg/styled-components.js";
import Navbar from "../components/navbar/Navbar.js";
import Index from "../pages/Index.js";
import GlobalStyle from "../styles/global.js";
import theme from "../styles/theme/theme.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(GlobalStyle, null), /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Index, null)));
};
export default App;
