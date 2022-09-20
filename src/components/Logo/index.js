import React from 'react';
import css from './style.module.css';
import imageLogo from '../../assets/images/burger-logo.png';
const Logo = () => (
  <div className={css.Logo}>
    <img src={imageLogo} />
  </div>
);

export default Logo;
