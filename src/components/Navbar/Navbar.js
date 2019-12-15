import React from 'react';
import glamorous from 'glamorous';
import { Link } from 'gatsby';

import { Menu } from '@components';

import profilePic from '@assets/aribe.jpg';

const SCWrapper = glamorous.div({
  margin: '0 auto',
  padding: '1rem',
  height: '6rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  position: 'fixed',
  width: '100%',
  top: '0',
  zIndex: '2',
});

const SCLogo = glamorous.div({
  flex: '0 0 4rem',
  width: '4rem',
  height: '4rem',
  borderRadius: '4rem',
  overflow: 'hidden',
  marginLeft: '1rem',
  transition: 'transform 0.2s ease',
  position: 'relative',
  zIndex: '3',
  ':hover': {
    transform: 'scale(1.1)',
  },
});

const SCMenu = glamorous.div({
  flex: '2',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-end',
  alignContent: 'flex-end',
  justifyContent: 'flex-end',
});

export const Navbar = ({ menu }) => (
  <SCWrapper>
    <Link to="/">
      <SCLogo>
        <img src={profilePic} alt="Arianna Belotti (ariabba)" />
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
