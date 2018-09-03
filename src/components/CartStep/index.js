import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import autobind from 'autobind-decorator';
import { Link, Route } from 'react-router-dom'

export default class CartStep extends Component {
    constructor(props) {
        super(props);
    }

    @autobind
    toStep1(e) {
        this.props.history.push({
            pathname: './step1',
        });
    }

    @autobind
    toStep2(e) {
        this.props.history.push({
            pathname: './step2',
        });
    }

    @autobind
    toStep3(e) {
        this.props.history.push({
            pathname: './step3',
        });
    }

    render() {

        var step1 = "";
        var step2 = "";
        var step3 = "";

        let state = this.props.step;
        switch (state) {
            case "step1":
                step1 = "active";
                break;
            case "step2":
                step2 = "active";
                break;
            case "step3":
                step3 = "active";
                break;
        }

        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs="12">
                            <div className="allwrap">
                                <Link to="./step1">
                                    <div className={"wrap " + step1}>
                                        <div className="number">1</div>
                                        <div className="desc">Shipping</div>
                                    </div>
                                </Link>
                                <div className="line"></div>
                                <Link to="./step2">
                                    <div className={"wrap " + step2}>
                                        <div className="number">2</div>
                                        <div className="desc">Payment</div>
                                    </div>
                                </Link>
                                <div className="line"></div>
                                <Link to="./step3">
                                    <div className={"wrap " + step3}>
                                        <div className="number">3</div>
                                        <div className="desc">Confirmation</div>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </React.Fragment >
        );
    }
}