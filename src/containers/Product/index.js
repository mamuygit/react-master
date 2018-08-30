import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Product extends Component {
    render() {
        return (
            <div className="product">
                <Container>
                    <Col sm="12">
                        <h1>Product</h1>
                    </Col>
                </Container>
            </div>
        );
    }
}