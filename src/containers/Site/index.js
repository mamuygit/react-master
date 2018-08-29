import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import autobind from 'autobind-decorator';

import './site.scss';
import Header from '../Header';
import Footer from '../Footer'
import Home from '../Home'
import ProductDetails from '../ProductDetails'
import Cart from '../Cart'

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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ProductDetails' component={ProductDetails} />
          <Route path='/Cart' component={Cart} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}