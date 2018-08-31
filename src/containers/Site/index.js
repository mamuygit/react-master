import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import autobind from 'autobind-decorator';

import './site.scss';
import Header from '../Header';
import Footer from '../Footer'
import Home from '../Home'
import Product from '../Product'
import Cart from '../Cart'
import Step1 from '../Cart/Step1';
import Step2 from '../Cart/Step2';
import Step3 from '../Cart/Step3';
import store from '../Home/store';
import { Provider } from 'mobx-react';

export default class Site extends Component {


  render() {
    return (
      <Provider myStore={store}>
        <React.Fragment>
            <Header />
              <Route exact path='/' component={Home} />
              <Route exact path='/product' component={Product} />
              <Route path='/product/123/cart/:step' component={Cart} />
            <Footer />
        </React.Fragment>
      </Provider> 
    );
  }
}