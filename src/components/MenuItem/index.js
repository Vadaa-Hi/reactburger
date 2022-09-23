import React from 'react';
import css from './style.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  return (
    <li className={css.MenuItem}>
      <NavLink
        to={props.link}
        //react-router v6 iim bolson bn. Gehdee buren ajiluulj boldogvi ee
        className={({ isActive }) => (isActive ? css.active : null)}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
