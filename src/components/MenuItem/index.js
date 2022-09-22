import React from 'react';
import css from './style.module.css';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => (
  <li className={css.MenuItem}>
    {/* click darsan uyd idevhjihgvi bn. Buyu css ogch chaddaggvi ee. 2022.09.23 */}
    <NavLink to={props.link} ClassName={css.active}>
      {props.children}
    </NavLink>
  </li>
);

export default MenuItem;
