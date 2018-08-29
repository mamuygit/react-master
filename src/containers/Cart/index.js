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
                        <p><Link to="/ProductDetails">ProductDetails</Link></p>
                        <p><Link to="/Cart">Cart</Link></p>
                        <h1>Cart</h1>
                        <Link to="/Cart/Step1">Step1</Link>
                        , <Link to="/Cart/Step2">Step2</Link>
                        , <Link to="/Cart/Step3">Step3</Link>
                        <div>
                            <Route path={`${this.props.match.path}/Step1`} component={Step1} />
                            <Route path={`${this.props.match.path}/Step2`} component={Step2} />
                            <Route path={`${this.props.match.path}/Step3`} component={Step3} />
                        </div>
                    </Col>
                </Container>
            </div>
        );
    }
}