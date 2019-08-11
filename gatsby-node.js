/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};