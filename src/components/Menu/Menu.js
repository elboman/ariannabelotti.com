import React, { Component } from 'react';
import glamorous from 'glamorous';
import Link from 'gatsby-link';

import { Hamburger } from '@components';

import { media, font, menuConfig, colors } from '@utils';

const SCWrapper = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
});

const SCHamburger = glamorous.div({
  marginRight: '1rem',
  [media.desktop]: {
    display: 'none',
  },
});

const SCMenu = glamorous.nav(
  {
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '2',
    top: '0',
    left: '0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [media.tabletOnly]: {
      flexDirection: 'row',
      width: '100%',
      height: '6rem',
      position: 'absolute',
      top: '0',
      right: '6rem',
      left: 'auto',
      justifyContent: 'flex-end',
    },
    [media.desktop]: {
      background: 'none',
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      top: '0',
      left: '0',
      right: '0',
    },
  },
  (props, theme) => ({
    display: props.open ? 'flex' : 'none',
    background: colors.white,
    [media.tabletOnly]: {
      background: colors.white,
      display: props.open ? 'flex' : 'none',
    },
  })
);

const SCItem = glamorous.span({
  fontFamily: font.title,
  fontWeight: '700',
  textDecoration: 'none',
  fontSize: '2rem',
  [media.notMobile]: {
    marginRight: '2rem',
    fontSize: '1.2rem',
  },
});

const MenuLink = glamorous(Link)({
  color: colors.accentDark,
  textDecoration: 'none',
});

export class Menu extends Component {
  state = {
    isOpen: false,
  };

  handleClick = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <SCWrapper>
        <SCHamburger>
          <Hamburger active={isOpen} onClick={this.handleClick} />
        </SCHamburger>
        <SCMenu open={isOpen}>
          {menuConfig.map(single => (
            <SCItem key={single.path}>
              <MenuLink
                to={single.path}
                onClick={this.handleClick}
                exact={single.exact}
                activeStyle={{
                  color: colors.accent,
                }}
              >
                {single.label}
              </MenuLink>
            </SCItem>
          ))}
        </SCMenu>
      </SCWrapper>
    );
  }
}
