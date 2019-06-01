import { StaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import React from "react";
import { rhythm } from "../utils/typography";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                minWidth: 80,
                minHeight: 80,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <div>
              <p>
                Scritto da <strong>{author}</strong>: run-nerd, centauro a strappi, marito,
                babbo. Sfortunato nel gioco.
              </p>
              <p>
                Social? <a href={`https://twitter.com/${social.twitter}`}>twitter</a>,{" "}
                <a href={`https://facebook.com/${social.facebook}`}>facebook</a> e{" "}
                <a href={`https://www.instagram.com/${social.instagram}`}>
                  #hofattoanchefotobuone
                </a>
                .
              </p>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 80, height: 80, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          facebook
          instagram
        }
      }
    }
  }
`;

export default Bio;
