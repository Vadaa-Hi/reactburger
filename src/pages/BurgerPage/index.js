import React, { Component } from 'react';
import Burger from '../../components/Burger';
import BuildControls from '../../components/BuildControls';
import Modal from '../../components/General/Modal';
import OrderSummary from '../../components/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/General/Spinner';

// Une oorchlogdohgvi tul class component iin gadna zarlav
const INGREDIENT_PRICES = { salad: 150, cheese: 250, bacon: 800, meat: 1500 };
// Oor gazruudad ashiglah bolson tul eronhii bolgov.
const INGREDIENT_NAMES = {
  bacon: 'Гахайн мах',
  cheese: 'Бяслаг',
  meat: 'Үхрийн мах',
  salad: 'Салад',
};
// dotroo state hadgaldag class component-r hiiy
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 1000,
    purchasing: false,
    confirmOrder: false, // state merge
    loading: false,
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;

    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];

    this.setState({
      purchasing: true,
      totalPrice: newPrice,
      ingredients: newIngredients,
    });
  };

  deleteIngredient = (type) => {
    if (this.state.ingredients[type] > 0) {
      const newIngredients = { ...this.state.ingredients };
      newIngredients[type]--;
      //order une
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({
        purchasing: newPrice > 1000,
        totalPrice: newPrice,
        ingredients: newIngredients,
      });
    }
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };
  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };
  continueOrder = () => {
    const order = {
      ingredient: this.state.ingredients,
      price: this.state.totalPrice,
      address: {
        name: 'Md',
        city: 'ub',
        street: ' 10th khoroolol',
      },
    };
    this.setState({ loading: true });
    axios
      .post('/orders.json', order)
      .then((response) => {})
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  componentDidMount = () => {};
  render() {
    const disabledIngredients = { ...this.state.ingredients };
    // object dotor bdg property oor davtalt hiih
    for (let key in disabledIngredients) {
      disabledIngredients[key] = disabledIngredients[key] <= 0;
    }
    return (
      <div>
        <Modal
          closeConfirmModal={this.closeConfirmModal}
          show={this.state.confirmOrder}
        >
          {this.state.loading ? (
            <Spinner />
          ) : (
            <OrderSummary
              onCancel={this.closeConfirmModal}
              onContinue={this.continueOrder}
              price={this.state.totalPrice}
              ingredientsNames={INGREDIENT_NAMES}
              ingredients={this.state.ingredients}
            />
          )}
        </Modal>

        <Burger ingredient={this.state.ingredients} />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          ingredientsNames={INGREDIENT_NAMES}
          disabled={!this.state.purchasing}
          totalPrice={this.state.totalPrice}
          disabledIngredients={disabledIngredients}
          addIngredient={this.addIngredient}
          deleteIngredient={this.deleteIngredient}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
