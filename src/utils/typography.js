import Theme from "typography-theme-alton";
import Typography from "typography";

const headerFontFamily = "Unica One";
const bodyFontFamily = "Merriweather";

Theme.baseFontSize = "16px";
Theme.baseLineHeight = 1.5;

// using local typefaces imported in gatsby-browser.js
delete Theme.googleFonts;

Theme.headerFontFamily = [headerFontFamily, "Helvetica", "sans-serif"];
Theme.bodyFontFamily = [bodyFontFamily, "Georgia", "serif"];
Theme.headerWeight = 400;
Theme.bodyWeight = 300;
Theme.scaleRatio = 2.5;

Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    textTransform: "uppercase"
  },
  "bold, b, strong": {
    fontWeight: 400
  },
  ul: {
    listStyle: "square"
  }
});

// console.log("TYPOGRAPHY THEME OBJ", Theme);

const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
