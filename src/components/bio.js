import { StaticQuery, graphql } from "gatsby";

import Image from "gatsby-image";
import React from "react";

import "./bio.scss";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { authorName, social } = data.site.siteMetadata;
        return (
          <div className="author-bio">
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={authorName}
              className="author-avatar"
            />
            <div>
              <p>
                <strong>{authorName}</strong>. Run-nerd, centauro a strappi,
                marito, babbo. Sfortunato nel gioco.{" "}
                <a href={`https://twitter.com/${social.twitter}`}>twitter</a>,{" "}
                <a href={`https://facebook.com/${social.facebook}`}>facebook</a>{" "}
                e{" "}
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
        authorName
        authorSurname
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
