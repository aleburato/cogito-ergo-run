import Typography from "typography";
import Theme from "typography-theme-alton";

// const headerFontFamily = "Yeseva One";
// const bodyFontFamily = "Cabin";

// Theme.googleFonts = [
//   {
//     name: headerFontFamily,
//     styles: ["400", "700"]
//   },
//   {
//     name: bodyFontFamily,
//     styles: ["400", "400i", "700", "700i"]
//   }
// ];

// Theme.headerFontFamily = [headerFontFamily, "Georgia", "serif"];
// Theme.bodyFontFamily = [bodyFontFamily, "helvetica", "sans-serif"];
// Theme.headerWeight = "normal";

const typography = new Typography(Theme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
