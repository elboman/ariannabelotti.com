const visit = require('unist-util-visit');

const isNil = require('lodash/isNil');
const has = require('lodash/has');
const shortcodes = require('remark-shortcodes');

module.exports = ({ markdownAST }, options = {}) => {
  visit(markdownAST, 'shortcode', node => {
    let type = node.identifier;
    let attrs = node.attributes;
    let content = transformContent(type, attrs);

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

function transformContent(type, attrs) {
  switch (type) {
    case 'Video': {
      return `<video autoplay loop muted playsinline>
        <source src="${attrs.url}" type="video/mp4">
      </video>`;
    }

    case 'VideoNoAutoplay': {
      return `<video controls loop muted playsinline>
        <source src="${attrs.url}" type="video/mp4">
      </video>`;
    }

    case 'Vimeo': {
      return `<iframe src="https://player.vimeo.com/video/${
        attrs.id
      }?color=1bbc9b&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>`;
    }
  }
}
