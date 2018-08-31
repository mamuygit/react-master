import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import autobind from 'autobind-decorator';
import { inject, observer } from 'mobx-react';

@inject(['myStore'])
@observer
export default class Home extends Component {

    constructor(props) {
        super(props)
        console.log(props);
    }

    @autobind
    checkout() {
        this.props.myStore.orderId = 'Home'
        this.props.history.push({
            pathname: './product/123/cart/step1',
            msg1: this.props.myStore.orderId
        });
    }
    render() {
        return (
            <div className="home">
                <Container>
                    <Col sm="12">
                        <h1>Home</h1>
                        <p>myStore.orderId: {this.props.myStore.orderId}</p>
                        <p>myStore.name: {this.props.myStore.name}</p>
                        <button className="btn btn-primary" onClick={this.checkout}>Checkout</button>
                    </Col>
                </Container>
            </div>
        );
    }
}