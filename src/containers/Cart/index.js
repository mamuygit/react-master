import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'

import Step1 from '../Cart/Step1';
import Step2 from '../Cart/Step2';
import Step3 from '../Cart/Step3';

export default class Cart extends Component {

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.props.match.params.step);
        // console.log(this.props.match.url);
    }

    render() {
        let component = (this.props.match.url.indexOf('step1') > -1) ? Step1 :
            (this.props.match.url.indexOf('step2') > -1) ? Step2 :
                (this.props.match.url.indexOf('step3') > -1) ? Step3 : null;

        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>Cart</h1>
                        <Link to="./step1">Step1</Link>
                        , <Link to="./step2">Step2</Link>
                        , <Link to="./step3">Step3</Link>
                        <Route path={`${this.props.match.url}`} component={component} />
                    </Col>
                </Container>
            </div>
        );
    }
}