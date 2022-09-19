import React from 'react';
import css from './style.module.css';

const BuildControl = (props) => (
  <div className={css.BuildControl}>
    <div className={css.Label}>{props.name}</div>
    <button
      onClick={() => props.addIngredient(props.type)}
      className={css.More}
    >
      Нэмэх
    </button>
    <button
      onClick={() => props.deleteIngredient(props.type)}
      className={css.Less}
    >
      Хасах
    </button>
  </div>
);

export default BuildControl;