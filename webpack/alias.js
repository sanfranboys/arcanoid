const path = require('path')

const alias = {
  '@': path.join(__dirname, '../src'),
  components: path.join(__dirname, '../src/components'),
  ducks: path.join(__dirname, '../src/ducks'),
  elements: path.join(__dirname, '../src/elements'),
  hocs: path.join(__dirname, '../src/hocs'),
  pages: path.join(__dirname, '../src/pages'),
  services: path.join(__dirname, '../src/services'),
  utils: path.join(__dirname, '../src/utils'),
  routes: path.join(__dirname, '../src/routes'),
  'react-dom': '@hot-loader/react-dom',
}

module.exports = alias
