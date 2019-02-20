import Typography from "typography";
import Theme from "typography-theme-alton";

const headerFontFamily = "Unica One";
const bodyFontFamily = "Merriweather";

Theme.googleFonts = [
  {
    name: headerFontFamily,
    styles: ["400"]
  },
  {
    name: bodyFontFamily,
    styles: ["400", "400i", "700", "700i"]
  }
];

Theme.headerFontFamily = [headerFontFamily, "Georgia", "serif"];
Theme.bodyFontFamily = [bodyFontFamily, "helvetica", "sans-serif"];
Theme.headerWeight = "normal";
// Theme.scaleRatio = 3;

Theme.overrideThemeStyles = ({ rhythm }, options) => ({
  "h1,h2,h3,h4,h5,h6": {
    textTransform: "uppercase"
  }
});

const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
