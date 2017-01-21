const path = require('path');

const getPath = pathStr => path.resolve(__dirname, pathStr);

module.exports = {
  srcPath: getPath('../src'),
  distPath: getPath('../dist'),
  publicPath: 'http://localhost:4000/',
  stylelintConfigPath: getPath('../stylelint.json'),
  templatePath: getPath('../public/index.html'),
  proxyTarget: 'http://localhost:4000',
};
