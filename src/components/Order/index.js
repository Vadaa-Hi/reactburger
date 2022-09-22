import React from 'react';
import css from './style.module.css';

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц : Гахайн мах : {props.order.ingredient.bacon}, Салад :{' '}
        {props.order.ingredient.salad}, Үхрийн мах :{' '}
        {props.order.ingredient.meat}, Бяслаг : {props.order.ingredient.cheese}
      </p>
      <p>
        Хаяг : {props.order.address.name} | {props.order.address.city} |
        {props.order.address.street}
      </p>
      <p>
        Үнийн дүн : <strong>{props.order.price}₮ </strong>
      </p>
    </div>
  );
};

export default Order;
