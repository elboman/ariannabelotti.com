const isRelativeUrl = require('is-relative-url');
const fsExtra = require('fs-extra');
const path = require('path');

const DEPLOY_DIR = 'public';

const newFileName = linkNode =>
  `${linkNode.name}-${linkNode.internal.contentDigest}.${linkNode.extension}`;

const newFilePath = (linkNode, destinationDir) => {
  if (destinationDir) {
    return path.posix.join(
      process.cwd(),
      DEPLOY_DIR,
      destinationDir,
      newFileName(linkNode)
    );
  }
  return path.posix.join(process.cwd(), DEPLOY_DIR, newFileName(linkNode));
};

const newLinkURL = (linkNode, destinationDir) => {
  if (destinationDir) {
    return path.posix.join(`/`, destinationDir, newFileName(linkNode));
  }
  return path.posix.join(`/`, newFileName(linkNode));
};

const getAbsolutePath = (parentNode, file) => {
  return path.posix.join(parentNode.dir, file);
};

exports.onCreateNode = ({ node, boundActionCreators }, pluginOptions = {}) => {
  const { createNodeField } = boundActionCreators;
  const {
    destinationDir,
    allowedExtensions = [],
    instanceNames = [],
  } = pluginOptions;

  const filesToCopy = new Map();
  if (
    node.internal.type === 'File' &&
    instanceNames.includes(node.sourceInstanceName) &&
    allowedExtensions.includes(node.extension)
  ) {
    const linkURL = newLinkURL(node, destinationDir);
    const filePath = newFilePath(node, destinationDir);
    filesToCopy.set(node.absolutePath, filePath);
    createNodeField({
      node,
      name: 'publicUrl',
      value: linkURL,
    });
  }

  return Promise.all(
    Array.from(filesToCopy, async ([filePathSource, filePathDest]) => {
      // Don't copy anything is the file already exists at the location.
      if (!fsExtra.existsSync(filePathDest)) {
        try {
          await fsExtra.ensureDir(path.dirname(filePathDest));
          await fsExtra.copy(filePathSource, filePathDest);
        } catch (err) {
          console.error(`error copy ing file`, err);
        }
      }
    })
  );
};
