import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { observer } from 'mobx-react';

import autobind from 'autobind-decorator';


@observer(['myStore'])

export default class Step1 extends Component {
    constructor(props) {
        super(props) 
        console.log('a', props)
        
    }

    componentDidMount() {
        this.props.myStore.orderId = 'Home1'
    }


    submitForm(e) {
        this.props.history.push({
            pathname: './step2',
            msg1: this.state.value
        });
    }

    @autobind
    handleChange(event) {
        var lang = event.target.value;
        this.setState({ value: lang });
    }

    render() {
        return (
            <div className="cart">
                <Container>
                    <Col sm="12">
                        <h1>P1~P1~P1</h1>
                        <Col sm="4">
                            <div>
                                <form onSubmit={this.submitForm}>
                                    message: <input className="form-control" type="text" name="text" value={this.state.value} onChange={this.handleChange} />
                                    <br />
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </Col>
                    </Col>
                </Container>
            </div>
        );
    }

}