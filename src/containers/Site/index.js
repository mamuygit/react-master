import './site.scss';
import { Provider } from 'mobx-react';
import { Switch, Route } from 'react-router-dom'
import Cart from '../Cart'
import cartStore from '../Cart/store';
import Footer from '../Footer'
import Header from '../Header';
import Home from '../Home'
import homeStore from '../Home/store';
import Product from '../Product'
import React, { Component } from 'react';

export default class Site extends Component {

  render() {
    return (
      <Provider myStore={homeStore}>
        <React.Fragment>
          <Header />
          <Route exact path='/' component={Home} />
          <Route exact path='/product' component={Product} />
          <Provider myStore={cartStore}>
            <Route path='/product/cart/:step' component={Cart} />
          </Provider>
          <Footer />
        </React.Fragment>
      </Provider >
    );
  }
}