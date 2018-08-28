import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Container>
                    <Col sm="12">
                        <p><Link to="/">Home</Link></p>
                        <p><Link to="/ProductDetails">ProductDetails</Link></p>
                        <p><Link to="/Cart">Cart</Link></p>
                        <h1>Home</h1>
                    </Col>
                </Container>
            </div>
        );
    }
}