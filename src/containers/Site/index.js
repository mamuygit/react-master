import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import autobind from 'autobind-decorator';

import './site.scss';
import Header from '../Header';
import Footer from '../Footer'
import Home from '../Home'
import ProductDetails from '../ProductDetails'
import Cart from '../Cart'
import Step1 from '../Cart/Step1';
import Step2 from '../Cart/Step2';
import Step3 from '../Cart/Step3';

export default class Site extends Component {

  constructor() {
    super()
    this.state = { count: 0 };
  }

  @autobind
  _handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  componentDidMount() {
    var wait1000 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    }).then(() => {
      console.log('Yay!1')
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/product' component={Product} />
        <Route path='/product/123/cart/:step' component={Cart} />
        <Footer /> 
      </React.Fragment>
    );
  }
}