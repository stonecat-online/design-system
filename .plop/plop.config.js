const componentGenerator = {
  description: "Create a new component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Component name?",
      default: "SomeComponent",
    },
    {
      type: "input",
      name: "atomicType",
      message: "Atomic level (atoms, molecules or organisms) ?",
      default: "atoms",
    },
  ],
  actions: ({ atomicType }) => {
    const actions = [
      {
        type: "add",
        path: "../src/shared/components/{{atomicType}}/{{properCase name}}/{{properCase name}}.jsx",
        templateFile: "./componentName.sfc.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/shared/components/{{atomicType}}/{{properCase name}}/{{properCase name}}.styled.jsx",
        templateFile: "./componentName.styled.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../stories/components/{{atomicType}}/{{properCase name}}.stories.jsx",
        templateFile: "./componentName.story.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/shared/components/{{atomicType}}/{{properCase name}}/index.jsx",
        templateFile: "./index.jsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

const templateComponentGenerator = {
  description: "Create a new template component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Template Component name?",
    },
    {
      type: "input",
      name: "atomicType",
      message: "Atomic level (atoms, molecules or organisms) ?",
      default: "molecules",
    },
  ],
  actions: ({ atomicType }) => {
    const actions = [
      {
        type: "add",
        path: "../src/shared/templateComponents/{{atomicType}}/{{properCase name}}/{{properCase name}}.jsx",
        templateFile: "./templateComponentName.sfc.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/shared/templateComponents/{{atomicType}}/{{properCase name}}/{{properCase name}}.styled.jsx",
        templateFile: "./templateComponentName.styled.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../stories/templateComponents/{{atomicType}}/{{properCase name}}.stories.jsx",
        templateFile: "./templateComponentName.story.jsx.hbs",
        abortOnFail: true,
      },
      {
        type: "add",
        path: "../src/shared/templateComponents/{{atomicType}}/{{properCase name}}/index.jsx",
        templateFile: "./index.jsx.hbs",
        abortOnFail: true,
      },
    ];

    return actions;
  },
};

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
  plop.setGenerator("templateComponent", templateComponentGenerator);
};
