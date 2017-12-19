import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Menu } from '@components';
import { font } from '@utils';

import profilePic from '@assets/arianna-belotti.jpg';

const SCWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  height: 6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
`;

const SCLogo = styled.div`
  flex: 0 0 4rem;
  width: 4rem;
  height: 4rem;
  border-radius: 4rem;
  overflow: hidden;
  margin-left: 1rem;
  transition: transform 0.2s ease;
  position: relative;
  z-index: 3;
  :hover {
    transform: scale(1.1);
  }
`;

const SCMenu = styled.div`
  flex: 2;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  align-content: flex-end;
  justify-content: flex-end;
`;

const SCMenuItem = styled.div`
  padding: 1rem;
`;

export const Navbar = ({ menu }) => (
  <SCWrapper>
    <Link to="/">
      <SCLogo>
        <img src={profilePic} />
      </SCLogo>
    </Link>
    <SCMenu>
      <Menu />
    </SCMenu>
  </SCWrapper>
);

Navbar.defaultProps = {
  menu: [],
};
