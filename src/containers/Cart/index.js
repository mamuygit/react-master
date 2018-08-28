import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'

import P1 from '../Cart/P1'
import P2 from '../Cart/P2'
import P3 from '../Cart/P3'

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
                        <Link to="/Cart/P1">P1</Link>
                        , <Link to="/Cart/P2">P2</Link>
                        , <Link to="/Cart/P3">P3</Link>
                        <div>
                            <Route path={`${this.props.match.path}/P1`} component={P1} />
                            <Route path={`${this.props.match.path}/P2`} component={P2} />
                            <Route path={`${this.props.match.path}/P3`} component={P3} />
                        </div>
                    </Col>
                </Container>
            </div>
        );
    }
}