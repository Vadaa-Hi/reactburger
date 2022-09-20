import React from 'react';
import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem link="/">БУРГЕР</MenuItem>
      <MenuItem active link="/checkout">
        ТӨЛБӨР
      </MenuItem>
    </ul>
  </div>
);
export default Menu;
