import { Link, graphql } from "gatsby";
import { rhythm, scale } from "../utils/typography";

import Bio from "../components/bio";
import Img from "gatsby-image";
import Layout from "../components/layout";
import React from "react";
import SEO from "../components/seo";

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1 className="blog-post-title">{post.frontmatter.title}</h1>
        <p
          className="txt-muted"
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          {post.frontmatter.date}
        </p>
        <Img
          className="post-featured-image"
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
        />
        <p className="image-desc">{post.frontmatter.featuredImageDesc}</p>
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
