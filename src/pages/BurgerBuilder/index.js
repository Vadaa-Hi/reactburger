import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
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

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };

  render() {
    return (
      <div>
        <Burger ingredient={this.state.ingredients} />
        <BuildControls addIngredient={this.addIngredient} />
      </div>
    );
  }
}

export default BurgerBuilder;
