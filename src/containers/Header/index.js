import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import Flag from '../../components/Flag'
import jpg from '../../images/craze-head.jpg'

const Logo = styled.img`
        width: 150px;
        margin: 15px 0px;
      `;

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col sm="6">
                            <a href="/"><Logo src={jpg} /></a>
                        </Col>
                        <Col sm="6" className="text-right align-self-center">
                            <Flag src="http://flags.fmcdn.net/data/flags/w580/th.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}