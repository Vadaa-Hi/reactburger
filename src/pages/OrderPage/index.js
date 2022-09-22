import React from 'react';
import Spinner from '../../components/General/Spinner';
import css from './style.module.css';
import axios from '../../axios-orders';
import Order from '../../components/Order';

class OrderPage extends React.Component {
  state = {
    order: [],
    loading: false,
  };
  componentDidMount = () => {
    this.setState({ loading: true });
    axios
      .get('/orders.json')
      .then((res) => {
        this.setState({ order: Object.entries(res.data).reverse() });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({ loading: false });
      });
  };
  render() {
    console.log(this.state.order);
    return (
      <div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          this.state.order.map((el) => <Order key={el[0]} order={el[1]} />)
        )}
      </div>
    );
  }
}

export default OrderPage;
