const breakpoints = {
  small: '52rem',
  big: '75rem',
};

export const media = {
  tabletOnly: `@media (min-width: ${breakpoints.small}) and (max-width: ${breakpoints.big})`,
  notMobile: `@media (min-width: ${breakpoints.small})`,
  desktop: `@media (min-width: ${breakpoints.big})`,
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
