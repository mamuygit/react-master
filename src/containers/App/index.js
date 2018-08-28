import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import Header from '../../containers/Header';
import './App.scss';
import styled from 'styled-components';

class App extends Component {
  
  constructor() {
    super()
    this.state = { count: 0 };
  }
  
  @autobind
  _handleClick() {
    this.setState({ count: this.state.count + 1 });
    console.log(`${this.a} asd`); // this is an ExampleComponent
  }

  componentDidMount() {
    console.log('componentDidMount')
    var wait1000 = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    }).then(() => {
      console.log('Yay!1')
    })

  }

  render() {
    const Title = styled.h1`
      font-size: 1.5em;
      text-align: center;
      color: palevioletred;
    `;

    console.log('renderd')
    return (
      <React.Fragment>
        <Header />
        {/* Switch Router Here  */}
        <footer className="Footer">
          Craze footer
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
