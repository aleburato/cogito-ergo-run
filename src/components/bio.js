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
                minWidth: 50,
                borderRadius: `100%`
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
            <p>
              Written by <strong>{author}</strong>: runnerd, photographer, biker.
              <br />
              Unlucky in cards.
              <br />
              You should follow him on{" "}
              <a href={`https://twitter.com/${social.twitter}`}>Twitter</a> /{" "}
              <a href={`https://facebook.com/${social.facebook}`}>Facebook</a>
            </p>
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
        fixed(width: 50, height: 50, quality: 90) {
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
        }
      }
    }
  }
`;

export default Bio;
