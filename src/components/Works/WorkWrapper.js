import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

import { colors, media } from '@utils';

import './_WorkWrapper.scss';

const floating = css.keyframes({
  '0%': {
    transform: 'translateY(0%)',
  },
  '50%': {
    transform: 'translateY(6%)',
  },
  '100%': {
    transform: 'translateY(0%)',
  },
});

export const WorkWrapper = glamorous.div({
  position: 'relative',
  ':hover .work-info': {
    opacity: 1,
    animation: `${floating} 1s`,
    animationIterationCount: 'infinite',
    transformOrigin: 'center bottom',
    boxShadow: '0px 0px 39px -9px rgba(0,0,0,0.3)',
  },
});

export const WorkInfoWrapper = glamorous.div({
  // transform: 'rotate(3deg)',
  opacity: 0,
  position: 'absolute',
  // bottom: '-0.9rem',
  // right: '-0.9rem',
  bottom: '-0.5rem',
  right: '-0.5rem',
  background: colors.darkGrey,
  color: colors.white,
  padding: '0.5rem 0.6rem',
  textAlign: 'center',
  // border: `0.4rem solid ${colors.white}`,
  // borderRadius: '1px',
  [media.desktop]: {
    opacity: 0,
  },
});

export const WorkTitle = glamorous.h3({
  fontSize: '1.2rem',
  margin: '0 0 0.2rem 0',
  color: colors.white,
  fontStyle: 'initial',
});

export const WorkDescription = glamorous.p({
  fontSize: '1rem',
  margin: 0,
  color: colors.white,
  fontStyle: 'italic',
});

export const WorkInfo = ({ title, description }) => (
  <WorkInfoWrapper className="work-info">
    <WorkTitle>{title}</WorkTitle>
    <WorkDescription>{description}</WorkDescription>
  </WorkInfoWrapper>
);
