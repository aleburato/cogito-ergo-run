import React from "react";
import { graphql } from "gatsby";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

function Gear({ data, location }) {
  const siteTitle = data.site.siteMetadata.title;
  const siteDescription = data.site.siteMetadata.description;

  return (
    <Layout location={location} title={siteTitle} description={siteDescription}>
      <SEO
        title={siteDescription}
        keywords={[`blog`, `running`, `corsa`, `correre`]}
      />
      <h1>La mia attrezzatura</h1>
      <p>Con cosa corro? Ecco: sadjhbasd askdghaskj asjasg dasdgjasdgjask </p>
      <Bio />
    </Layout>
  );
}

export default Gear;

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
