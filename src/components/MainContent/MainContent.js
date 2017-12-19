import React from 'react';
import styled from 'styled-components';

import { media } from '@utils';

const Wrapper = styled.div`
  max-width: 52rem;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  box-sizing: border-box;
  height: 100%;
  z-index: 5;
  position: relative;

  ${media.notMobile`
    padding: 1rem;
  `};
`;

export const MainContent = ({ children }) => <Wrapper>{children}</Wrapper>;
