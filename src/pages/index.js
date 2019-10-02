import "./index.scss";

import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { BlogPostExcerpt } from "../components/blog-post-excerpt";

function SiteIndex({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <SEO
        title={siteDescription}
        keywords={[`blog`, `running`, `corsa`, `correre`]}
      />
      <Bio />
      {posts.map((edge, idx) => (
        <BlogPostExcerpt key={idx} post={edge.node} />
      ))}
    </Layout>
  );
}

export default SiteIndex;

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
            date(formatString: "DD MMMM YYYY", locale: "it")
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
