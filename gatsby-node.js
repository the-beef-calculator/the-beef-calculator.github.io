/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const fs = require('fs').promises;
require('dotenv').config({ path: './.env' });

let fetch;
exports.createPages = async ({ reporter }) => {
  // Dynamically import node-fetch
  fetch = (await import('node-fetch')).default;
  const apiUrl = process.env.WAKATIME_JSON_URL;
  const filePath = path.join(__dirname, 'src', 'chartData.json');

  try {
    await fetchAndWriteChartData(apiUrl, filePath);
  } catch (error) {
    reporter.panicOnBuild(`Error fetching and writing data: ${error.message}`);
  }
};

async function fetchAndWriteChartData(api, filePath) {
  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`Response not OK: ${response.statusText}`);
  }

  const data = await response.json();
  await fs.writeFile(filePath, JSON.stringify(data));
}

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
          {
            test: /miniraf/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@images': path.resolve(__dirname, 'src/images'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
