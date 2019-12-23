//@ts-check

const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);

const BLOG_POSTS_TEMPLATE = "blog-post";
const BLOG_POSTS_QUERY = `
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
      ) {
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
    `;

const PAGES_TEMPLATE = "page";
const PAGES_QUERY = `
  {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "pages" } } }
      limit: 1000
      ) {
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
    `;

exports.createPages = async ({ graphql, actions }) => {
  const doCreatePages = createPagesByQuery(graphql, actions.createPage);

  await doCreatePages(PAGES_QUERY, PAGES_TEMPLATE);
  await doCreatePages(BLOG_POSTS_QUERY, BLOG_POSTS_TEMPLATE);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    // Create a proper slug
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({ node, getNode })
    });

    // Create a field on this node for the "collection" of the parent
    // NOTE: This is necessary so we can filter `allMarkdownRemark` by
    // `collection` otherwise there is no way to filter for only markdown
    // documents of type `post`.
    createNodeField({
      node,
      name: "collection",
      value: getNode(node.parent).sourceInstanceName
    });
  }
};

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig();
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom"
    };
  }
};

const createPagesByQuery = (graphql, createPage) => async (query, template) => {
  const result = await graphql(query);

  if (result.errors) {
    throw result.errors;
  }

  const pageTemplate = path.resolve(`./src/templates/${template}.js`);

  // Create blog posts pages.
  const pages = result.data.allMarkdownRemark.edges;

  pages.forEach((page, index) => {
    const { slug, collection } = page.node.fields;
    const previous = index === pages.length - 1 ? null : pages[index + 1].node;
    const next = index === 0 ? null : pages[index - 1].node;
    // console.log(">>> Create page", { slug, collection });
    createPage({
      path: slug,
      component: pageTemplate,
      context: {
        slug,
        collection,
        previous,
        next
      }
    });
  });
};
