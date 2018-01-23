const breakpoints = {
  small: '52rem',
  big: '75rem',
};

export const media = {
  tabletOnly: `@media (min-width: ${breakpoints.small}) and (max-width: ${
    breakpoints.big
  })`,
  notMobile: `@media (min-width: ${breakpoints.small})`,
  desktop: `@media (min-width: ${breakpoints.big})`,
};

export const font = {
  title: "'europa', sans-serif",
  body: "'Spectral', serif",
};

export const colors = {
  accent: '#fc5c65',
  accentDark: '#4b6584',
  darkGrey: 'rgb(45,45,45)',
  black: 'rgba(0,0,0,0.85)',
  white: '#FFF',
  font: 'rgba(0,0,0,0.85)',
  lightGrey: '#b1b1b1',
  grey: '#e9e9e9',
};

export default {
  media,
  font,
  colors,
};
