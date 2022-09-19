import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
// dotroo state hadgaldag class component-r hiiy
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 10,
      cheese: 2,
      bacon: 3,
      meat: 0,
    },
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };

  deleteIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      this.setState({ ingredients: newIngredients });
    }
  };

  render() {
    const disabledIngredients = { ...this.state.ingredients };
    // object dotor bdg property oor davtalt hiih
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Burger ingredient={this.state.ingredients} />
        <BuildControls
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          deleteIngredient={this.deleteIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
