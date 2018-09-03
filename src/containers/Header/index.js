import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";
import Flag from '../../components/Flag'
import jpg from '../../images/craze-head.jpg'
import { Link, Route } from 'react-router-dom'

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
                        <Col xs="6">
                            <Link to="/"><Logo src={jpg} /></Link>
                        </Col>
                        <Col xs="6" className="text-right align-self-center">
                            <Flag src="http://flags.fmcdn.net/data/flags/w580/th.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}