import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";

import jpg from '../../images/craze-head.jpg'

export default class Header extends Component {
    render() {
        const Logo = styled.img`
        width: 150px;
        margin: 15px 0px;
      `;
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col sm="12">
                            <Logo src={jpg} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}