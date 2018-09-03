import { Container, Row, Col } from 'reactstrap';
import { Link, Route } from 'react-router-dom'
import autobind from 'autobind-decorator';
import React, { Component } from 'react';
import Step1 from '../Cart/Step1';
import Step2 from '../Cart/Step2';
import Step3 from '../Cart/Step3';

import CartStep from '../../components/CartStep';

export default class Cart extends Component {

    componentDidMount() {
        // console.log(this.props);
        // console.log(this.props.match.params.step);
        // console.log(this.props.match.url);
    }

    render() {
        let url = this.props.match.url;
        let component;
        let component_name;

        if (url.indexOf('step1') > -1) {
            component = Step1;
            component_name = "step1";
        } else if (url.indexOf('step2') > -1) {
            component = Step2;
            component_name = "step2";
        } else if (url.indexOf('step3') > -1) {
            component = Step3;
            component_name = "step3";
        }

        // let component = (this.props.match.url.indexOf('step1') > -1) ? Step1 :
        //     (this.props.match.url.indexOf('step2') > -1) ? Step2 :
        //         (this.props.match.url.indexOf('step3') > -1) ? Step3 : null;

        return (
            <div className="cart">
                <CartStep step={component_name} />
                <Container>
                    <Row>
                        <Col xs="12">
                            <h1>Cart</h1>
                            {/* <Link to="./step1">Step1</Link>
                        , <Link to="./step2">Step2</Link>
                        , <Link to="./step3">Step3</Link> */}
                            <Route path={`${this.props.match.url}`} component={component} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}