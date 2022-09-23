import React from 'react';
import MenuItem from '../MenuItem';
import css from './style.module.css';

const Menu = () => (
  <div>
    <ul className={css.Menu}>
      <MenuItem link="/new">ШИНЭ ЗАХИАЛГА</MenuItem>
      <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
    </ul>
  </div>
);
export default Menu;
