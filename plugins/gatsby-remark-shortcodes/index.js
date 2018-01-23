const visit = require('unist-util-visit');

const isNil = require('lodash/isNil');
const has = require('lodash/has');
const shortcodes = require('remark-shortcodes');

module.exports = ({ markdownAST }, options = {}) => {
  visit(markdownAST, 'shortcode', node => {
    let type = node.identifier;
    let attrs = node.attributes;

    let content = '';

    switch (type) {
      case 'Video': {
        content = `<video autoplay loop muted playsinline>
          <source src="${attrs.url}" type="video/mp4">
        </video>`;
      }
    }

    node.type = 'html';
    node.value = content;
  });
};

module.exports.setParserPlugins = options => {
  if (isNil(options) || !has(options, 'shortcodes')) {
    throw Error('missing required "shortcodes" option');
  }
  return [[shortcodes, options.shortcodes]];
};
