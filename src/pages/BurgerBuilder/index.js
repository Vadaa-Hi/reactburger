import React, { Component } from 'react';
import Burger from '../../components/Burger';
// dotroo state hadgaldag class component-r hiiy
class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <div>Орцны удирдлага</div>
      </div>
    );
  }
}

export default BurgerBuilder;
