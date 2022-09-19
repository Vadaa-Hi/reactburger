import React from 'react';
import css from './style.module.css';
import BuildControl from '../BuildControl';

const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl
      addIngredient={props.addIngredient}
      type="salad"
      name="Салад"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      type="bacon"
      name="Гахайн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      type="cheese"
      name="Бяслаг"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      type="meat"
      name="Үхрийн мах"
    />
  </div>
);

export default BuildControls;
