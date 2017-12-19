import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { Hamburger } from '@components';

import { media, font, menuConfig } from '@utils';

const SCWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const SCHamburger = styled.div`
  margin-right: 1rem;
  ${media.desktop`
    display: none;
  `};
`;

const SCMenu = styled.nav`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: ${props => (props.open ? 'flex' : 'none')};
  background: ${props => props.theme.colors.white};
  ${media.tabletOnly`
    background: ${props => props.theme.colors.white};
    display: ${props => (props.open ? 'flex' : 'none')};
    flex-direction: row;
    width: 100%;
    height: 6rem;
    position: absolute;
    top: 0;
    right: 6rem;
    left: auto;
    justify-content: flex-end;
  `} ${media.desktop`
    background: none;
    display: flex;
    flex-direction: row;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  `};
`;

const SCItem = styled.span`
  font-family: ${font.title};
  font-weight: 700;
  text-decoration: none;
  font-size: 2rem;

  ${media.notMobile`
    margin-right: 2rem;
    font-size: 1.2rem;
  `} a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
  }
`;

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
            <SCItem>
              <Link
                to={single.path}
                onClick={this.handleClick}
                exact={single.exact}
                activeStyle={{
                  color: '#1BBC9B',
                }}
              >
                {single.label}
              </Link>
            </SCItem>
          ))}
        </SCMenu>
      </SCWrapper>
    );
  }
}
