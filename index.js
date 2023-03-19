'use strict';

if (process.env.ENV_NODE === 'production') {
  module.exports = require('./dist/index.min.js')
} else {
  module.exports = require('./dist/index.cjs.js')
}