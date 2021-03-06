/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const { init, trackPage } = require('./stats');

exports.onClientEntry = () => {
  init();
};

exports.onRouteUpdate = ({ location }) => {
  trackPage(location.pathname + location.search);
};
