//@ts-check
import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class PageTemplate extends React.Component {
  render() {
    const {
      site: {
        siteMetadata: { title: siteTitle }
      },
      markdownRemark: {
        html,
        excerpt,
        frontmatter: { title: pageTitle }
      }
    } = this.props.data;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={pageTitle} description={excerpt} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Layout>
    );
  }
}

export default PageTemplate;

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
