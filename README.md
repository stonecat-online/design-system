# 📖 Design system

The environment for development and display of shared presentational components and themes.

## 🚀 Getting started

- clone shared components repr (https://github.com/Perlego/shared-components) into src/exportable
- run npm i
- to run locally:
  `npm run storybook`

## 🚅 Quick tips

- create new templated component:
  `npm run generate`

## 📦 Creating new components

To add a new component, just run `npm run generate`. This command will generate all the component (Stateless or not) files for you. A default option will be displayed in brackets.

This process adds a component into the exportable folder at the appriate atomic level.

This process is handled by plop, a templating library, which can be configured in the .plop folder.

## 🔲 Adding UI testing elements (toggles, text values etc.)

Addons are utilized to allow users to toggle states, set values etc. These addons need to be configured in the src/stories folder

## 🐛 Testing

To test your components run `npm test`.
By default we should run tests and lint before any push.

## ↗ Deploying storybook

To deploy storybook to Github Pages run `npm run deploy-storybook`.
