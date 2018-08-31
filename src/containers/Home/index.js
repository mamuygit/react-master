import { Container, Row, Col } from 'reactstrap';
import { inject, observer } from 'mobx-react';
import autobind from 'autobind-decorator';
import React, { Component } from 'react';

@inject(['myStore'])
@observer

export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props.myStore);
    }

    @autobind
    checkout() {
        this.props.myStore.orderId = '111'
        this.props.history.push({
            pathname: '/product/cart/step1',
            orderId: this.props.myStore.orderId
        });
    }

    render() {
        return (
            <div className="home">
                <Container>
                    <Col sm="12">
                        <h1>Home</h1>
                        <p>myStore.orderId: {this.props.myStore.orderId}</p>
                        <button className="btn btn-primary" onClick={this.checkout}>Checkout to change orderId to 111</button>
                    </Col>
                </Container>
            </div>
        );
    }
}