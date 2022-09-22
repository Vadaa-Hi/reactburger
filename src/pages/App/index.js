import css from './style.module.css';
import Toolbar from '../../components/Toolbar';
import BurgerPage from '../BurgerPage';
import SideBar from '../../components/SideBar';
import { Component } from 'react';
import OrderPage from '../OrderPage';
import { Route, Routes } from 'react-router-dom';

class App extends Component {
  state = {
    showSidebar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSidebar: !prevState.showSidebar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar toggleSideBar={this.toggleSideBar} />
        <SideBar
          showSidebar={this.state.showSidebar}
          toggleSideBar={this.toggleSideBar}
        />
        <main className={css.Content}>
          <Routes>
            <Route path="/" element={<BurgerPage />} />
            <Route path="/orders" element={<OrderPage />} />
          </Routes>
        </main>
      </div>
    );
  }
}

export default App;
