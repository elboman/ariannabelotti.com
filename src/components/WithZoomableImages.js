import React, { Component } from 'react';
import srcset from 'srcset';
import PhotoSwipe from 'photoswipe';
import PhotoSwipeUI from 'photoswipe/dist/photoswipe-ui-default';

import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';

export class WithZoomableImages extends Component {
  componentDidMount() {
    const galleryEl = document.getElementById('photoswipe-gallery');
    const contentEl = this.contentRef;
    if (!galleryEl || !contentEl) return;
    this.initGallery(galleryEl, contentEl);
  }

  initGallery = (galleryEl, contentEl) => {
    // get all images
    const nodeImages = contentEl.querySelectorAll('img');

    // prepare items for gallery
    let galleryImages = Array.from(nodeImages).map((single, index) => {
      const srcs = single.getAttribute('srcset');
      single.setAttribute('data-order-id', index);
      single.setAttribute('data-clickable', true);
      const parsedSrcs = srcset.parse(srcs);
      const width = single.getAttribute('data-width');
      const height = single.getAttribute('data-height');
      const big = parsedSrcs[parsedSrcs.length - 1]; // last image is the biggest
      const small = parsedSrcs[0]; // first image is the smallest
      return {
        src: big.url,
        msrc: small.url,
        w: width,
        h: height
      }
    });

    // bind click event for opening the gallery when
    // clicking on an image
    Array.from(nodeImages).forEach((single) => {
      const orderId = single.getAttribute('data-order-id');
      single.onclick = e => {
        e.preventDefault();
        e.stopPropagation();
        this.openGallery(galleryEl, galleryImages, orderId);
      }
    });
  }

  openGallery = (galleryEl, galleryImages, startingFrom) => {
    const options = {
      index: parseInt(startingFrom),
      history: false,
      closeEl: true,
      captionEl: false,
      fullscreenEl: false,
      zoomEl: true,
      shareEl: false,
      counterEl: false,
      arrowEl: true,
      preloaderEl: true,
    };
    const gallery = new PhotoSwipe(galleryEl, PhotoSwipeUI, galleryImages, options);
    gallery.init();
  }

  render() {
    const { children } = this.props;
    return (
      <div ref={ref => this.contentRef = ref}>
        {children}
      </div>
    );
  }
}
