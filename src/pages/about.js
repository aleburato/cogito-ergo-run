import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <SEO
        title={siteDescription}
        keywords={[`blog`, `running`, `corsa`, `correre`]}
      />
      <div>
        <p>Ciao mi chiamo MEO!</p>
      </div>
    </Layout>
  );
}

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
