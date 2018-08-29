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

        {/* Product */}
        <Route path='/productDetails' component={ProductDetails} />

        {/* Cart Step */}
        <Route path='/cart' component={Cart} />
        <Route path='/cart/step1' component={Step1} />
        <Route path='/cart/step2' component={Step2} />
        <Route path='/cart/step3' component={Step3} />
        <Footer />
      </React.Fragment>
    );
  }
}