import React from "react";
import { Link, graphql } from "gatsby";
import { rhythm } from "../utils/typography";

import Bio from "../components/bio";
import FeaturedImage from "../components/featured-image";
import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p className="blog-post-date">{post.frontmatter.date}</p>
        <FeaturedImage
          image={post.frontmatter.featuredImage}
          imageCaption={post.frontmatter.featuredImageDesc}
        />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <p>...</p>

        {(previous || next) && (
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              marginLeft: 0,
              marginTop: rhythm(1),
              marginBottom: rhythm(2.5),
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        )}

        <Bio />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        authorName
        authorSurname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "DD MMMM YYYY", locale: "it")
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
`;
