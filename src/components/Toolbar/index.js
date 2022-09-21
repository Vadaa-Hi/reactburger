import React from 'react';
import Logo from '../Logo';
import Menu from '../Menu';
import css from './style.module.css';
import HamburgerMenu from '../HamburgerMenu';

const Toolbar = (props) => (
  <header className={css.Toolbar}>
    <HamburgerMenu toggleSideBar={props.toggleSideBar} />
    <Logo />
    <nav className={css.HideOnMobile}>
      <Menu />
    </nav>
  </header>
);

export default Toolbar;
