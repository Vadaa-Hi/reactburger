import React from 'react';
import css from './style.module.css';
import BuildControl from '../BuildControl';

const BuildControls = (props) => {
  return (
    <div className={css.BuildControls}>
      <p>
        Бургерийн үнэ: <strong>{props.totalPrice}</strong>
      </p>

      {Object.keys(props.ingredientsNames).map((el) => (
        <BuildControl
          key={el}
          addIngredient={props.addIngredient}
          deleteIngredient={props.deleteIngredient}
          disabled={props.disabledIngredients}
          type={el}
          name={props.ingredientsNames[el]}
        />
      ))}
      <button disabled={props.disabled} className={css.OrderButton}>
        ЗАХИАЛАХ
      </button>
    </div>
  );
};

export default BuildControls;
