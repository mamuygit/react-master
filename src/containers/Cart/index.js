import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'

import Step1 from '../Cart/Step1'
import Step2 from '../Cart/Step2'
import Step3 from '../Cart/Step3'

export default class Cart extends Component {
    render() {
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/product">Product</Link></p>
                        <p><Link to="/cart">Cart</Link></p>
                        <h1>Cart</h1>
                        <Link to="/cart/step1">Step1</Link>
                        , <Link to="/cart/step2">Step2</Link>
                        , <Link to="/cart/step3">Step3</Link>
                    </Col>
                </Container>
            </div>
        );
    }
}