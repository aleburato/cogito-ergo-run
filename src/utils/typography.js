import Typography from "typography"
import Theme from "typography-theme-alton"

// Theme.googleFonts = [
//   {
//     name: 'Lobster',
//     styles: ['400'],
//   },
//   {
//     name: 'Open Sans',
//     styles: ['400', '400i', '700', '700i'],
//   },
// ]

// Theme.headerFontFamily = ['Lobster', 'Georgia', 'serif']

const typography = new Typography(Theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
