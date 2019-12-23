import { Link, useStaticQuery, graphql } from "gatsby";
import React from "react";

import "./site-navigation.scss";

const STATIC_SITE_MAP = [{ path: "/", name: "Blog" }];

export const SiteNavigation = () => {
  const pageList = useStaticQuery(graphql`
    query PageListQuery {
      allMarkdownRemark(filter: { fields: { collection: { eq: "pages" } } }) {
        edges {
          node {
            fields {
              slug
              collection
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  const siteMap = [
    ...STATIC_SITE_MAP,
    ...pageList.allMarkdownRemark.edges.map(
      ({
        node: {
          fields: { slug },
          frontmatter: { title }
        }
      }) => ({
        path: slug,
        name: title
      })
    )
  ];

  return (
    <ul className="site-navigation">
      {siteMap.map(item => (
        <li key={item.name}>
          <Link activeClassName="site-navigation-active-item" to={item.path}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
