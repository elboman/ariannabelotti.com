import { css } from 'styled-components';

const breakpoints = {
  small: '52rem',
  big: '75rem',
};

export const media = {
  tabletOnly: (...args) => css`
    @media (min-width: ${breakpoints.small}) and (max-width: ${breakpoints.big}) {
      ${css(...args)};
    }
  `,
  notMobile: (...args) => css`
    @media (min-width: ${breakpoints.small}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${breakpoints.big}) {
      ${css(...args)};
    }
  `,
};

export const font = {
  title: "'europa', sans-serif",
  body: "'Spectral', serif",
};

export const colors = {
  accent: '#79c7b2',
  accentDark: '#2c3e50',
  black: 'rgba(0,0,0,0.85)',
  white: '#FFF',
  font: 'rgba(0,0,0,0.85)',
  lightGrey: '#b1b1b1',
};

export default {
  media,
  font,
  colors,
};

// const sizes = {
//   large: '50rem',
// };

// const media = {
//   large: styles => ``,
// };
// // @media (max-width: 700px) {
// //     background: palevioletred;
// // }
