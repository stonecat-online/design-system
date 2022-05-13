// could pass in an array of specific stylesheets for optimization
function getAllCSSVariableNames(styleSheets = document.styleSheets) {
  var cssVars = [];
  // loop each stylesheet
  for (var i = 0; i < styleSheets.length; i++) {
    // loop stylesheet's cssRules
    try {
      // try/catch used because 'hasOwnProperty' doesn't work
      for (var j = 0; j < styleSheets[i].cssRules.length; j++) {
        try {
          // loop stylesheet's cssRules' style (property names)
          for (var k = 0; k < styleSheets[i].cssRules[j].style.length; k++) {
            let name = styleSheets[i].cssRules[j].style[k];
            // test name for css variable signiture and uniqueness
            if (name.startsWith("--") && cssVars.indexOf(name) == -1) {
              cssVars.push(name);
            }
          }
        } catch (error) {}
      }
    } catch (error) {}
  }
  return cssVars;
}

function getElementCSSVariables(allCSSVars, element = document.body, pseudo) {
  var elStyles = window.getComputedStyle(element, pseudo);
  var cssVars = {};
  for (var i = 0; i < allCSSVars.length; i++) {
    let key = allCSSVars[i];
    let value = elStyles.getPropertyValue(key);
    if (value) {
      cssVars[key] = value;
    }
  }
  return cssVars;
}

export const getCssVars = () => {
  const cssVars = getAllCSSVariableNames();
  return getElementCSSVariables(cssVars, document.documentElement);
};

export const getCssColours = () => {
  const cssVars = getAllCSSVariableNames();
  const cssVariables = getElementCSSVariables(
    cssVars,
    document.documentElement
  );

  return Object.values(cssVariables).filter((value) => {
    if (value.startsWith("#")) {
      return value;
    }
  });
};
