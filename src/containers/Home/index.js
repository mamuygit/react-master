import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Container>
                    <Col sm="12">
                        <h1>Home</h1>
                    </Col>
                </Container>
            </div>
        );
    }
}