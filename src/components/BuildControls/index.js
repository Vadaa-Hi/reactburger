import React from 'react';
import css from './style.module.css';
import BuildControl from '../BuildControl';

const BuildControls = (props) => (
  <div className={css.BuildControls}>
    <BuildControl
      addIngredient={props.addIngredient}
      deleteIngredient={props.deleteIngredient}
      disabled={props.disabledIngredients}
      type="salad"
      name="Салад"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      deleteIngredient={props.deleteIngredient}
      disabled={props.disabledIngredients}
      type="bacon"
      name="Гахайн мах"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      deleteIngredient={props.deleteIngredient}
      disabled={props.disabledIngredients}
      type="cheese"
      name="Бяслаг"
    />
    <BuildControl
      addIngredient={props.addIngredient}
      deleteIngredient={props.deleteIngredient}
      disabled={props.disabledIngredients}
      type="meat"
      name="Үхрийн мах"
    />
  </div>
);

export default BuildControls;
