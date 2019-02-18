import "./index.css";

import { Link, graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle} description={siteDescription}>
        <SEO title="All posts" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
        <div
          style={{
            marginBottom: rhythm(2.5)
          }}
        >
          <Bio />
        </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div className="post-block" key={node.fields.slug}>
              <h2
                style={{
                  marginBottom: 0
                }}
              >
                <Link to={node.fields.slug}>{title}</Link>
              </h2>
              <p className="txt-small txt-muted">{node.frontmatter.date}</p>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

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
          excerpt(pruneLength: 160)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY", locale: "it")
            title
          }
        }
      }
    }
  }
`;
