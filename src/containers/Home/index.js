import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';

@observer(['myStore'])
export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    @autobind
    checkout() {
        console.log(this.props)
        this.props.myStore.orderId = 'Home'
        this.props.history.push({
            pathname: './cart/step1',
            msg1: this.props.myStore.orderId
        });
        // this.props.store.orderId = 'Home';
    }

    render() {
        return (
            <div className="home">
                <Container>
                    <Col sm="12">
                        <h1>Home</h1>
                        <button onClick={this.checkout}>Checkout</button>
                    </Col>
                </Container>
            </div>
        );
    }
}