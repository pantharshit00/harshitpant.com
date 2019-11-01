/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, trailingSlash: false });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
        "@images": path.resolve(__dirname, "src/images"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@hooks": path.resolve(__dirname, "src/hooks")
      }
    }
  });
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // grab all markdown posts
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMdx(
          filter: { frontmatter: { draft: { ne: true } } }
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          nodes {
            id
            excerpt(pruneLength: 150)
            timeToRead
            frontmatter {
              title
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          return reject(result.errors);
        }
        const blogPosts = result.data.allMdx.nodes;
        // create blog page
        blogPosts.forEach((node, i) => {
          const next = i === 0 ? null : blogPosts[i - 1];
          const prev = i === blogPosts.length - 1 ? null : blogPosts[i + 1];

          createPage({
            path: `/blog${node.fields.slug}`,
            component: path.resolve("./src/templates/blog-post/index.tsx"),
            context: {
              slug: node.fields.slug,
              prev,
              next
            }
          });
        });

        // tag pages

             // create tag pages
      const tagList = blogPosts
        .filter(post => post.frontmatter.tags)
        .map(post => post.frontmatter.tags)
        .reduce((acc, postTagArr) => acc.concat(postTagArr), []);

            new Set(tagList).forEach(tag => {
        createPage({
          path: `/tag/${tag.toLowerCase()}/`,
          component: path.resolve('./src/templates/tag/index.tsx'),
          context: {
            tag,
          },
        });
      });

        return resolve();
      })
      .catch(reject);
  });
};
