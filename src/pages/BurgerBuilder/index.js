import React, { Component } from 'react';
import Burger from '../../components/Burger';
// dotroo state hadgaldag class component-r hiiy
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <div>
        <Burger ingredient={this.state.ingredients} />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default BurgerBuilder;
