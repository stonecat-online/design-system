import React from "react";
import cssVariablesTheme from "@etchteam/storybook-addon-css-variables-theme";
import global from "../src/shared/theme/global.css";
import light from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/styles/light.css";
import dark from "!!style-loader?injectType=lazyStyleTag!css-loader!../src/styles/dark.css";
// .storybook/preview.js

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  cssVariables: {
    files: {
      "Light Theme": light,
      "Dark Theme": dark,
    },
    defaultTheme: "Light Theme",
  },
};

export const decorators = [
  cssVariablesTheme,
  (Story) => (
    <div style={global}>
      <Story />
    </div>
  ),
];
