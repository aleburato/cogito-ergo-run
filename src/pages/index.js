import "./index.css";

import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Img from "gatsby-image";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

export default function({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <SEO title={siteDescription} keywords={[`blog`, `running`, `corsa`, `correre`]} />
      <div
        style={{
          marginBottom: rhythm(2.2)
        }}
      >
        <Bio />
      </div>
      {posts.map(
        ({
          node: {
            frontmatter: { date, title, featuredImage, featuredImageDesc },
            excerpt,
            fields: { slug }
          }
        }) => {
          const actualTitle = title || slug;
          return (
            <div className="post-block" key={slug}>
              <h2
                style={{
                  marginBottom: 0
                }}
              >
                <Link to={slug}>{actualTitle}</Link>
              </h2>
              <p className="txt-small txt-muted">{date}</p>
              <Link to={slug}>
                <Img
                  className="post-featured-image"
                  fluid={featuredImage.childImageSharp.fluid}
                />
              </Link>
              <p className="image-desc">
                <em>{featuredImageDesc}</em>
              </p>
              <div className="post-excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />
              <p>
                <small>
                  <em>
                    <Link to={slug}>(leggi tutto)</Link>
                  </em>
                </small>
              </p>
            </div>
          );
        }
      )}
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(format: HTML, pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY", locale: "it")
            title
            featuredImageDesc
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 658) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
