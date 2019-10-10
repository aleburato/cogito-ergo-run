module.exports = {
  siteMetadata: {
    title: `Cogito, ergo run.`,
    authorName: `Alessandro`,
    authorSurname: `Burato`,
    description: `Un blog sull’inevitabilità del correre`,
    siteUrl: `https://cogito.ergo.run/`,
    social: {
      twitter: `ale_burato`,
      facebook: `ale_burato`,
      instagram: `alessandro.burato`
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-use-dark-mode",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 658,
              quality: 70,
              withWebp: true,
              tracedSVG: true,
              showCaptions: true
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-footnotes`,
            options: {
              footnoteBackRefPreviousElementDisplay: "inline",
              footnoteBackRefDisplay: "inline",
              // footnoteBackRefInnerText: "^", // Defaults to: "↩"
              //use if you want the Wikipedia style ^ link without an underline beneath it
              footnoteBackRefAnchorStyle: `text-decoration: none;`
              //use "front" for Wikipedia style ^ links
              // footnoteBackRefInnerTextStartPosition: "front"
            }
          }
        ]
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cogito ergo run`,
        short_name: `cogitoergorun`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ac926c`,
        display: `minimal-ui`,
        icon: `assets/running.svg`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true, // use prettier to format JS code output (default)
        svgo: true, // use svgo to optimize SVGs (default)
        svgoConfig: {
          removeViewBox: true, // remove viewBox when possible (default)
          cleanupIDs: true // remove unused IDs and minify remaining IDs (default)
        }
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cache`
  ]
};
