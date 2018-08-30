import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";

import sprite from "../../images/sprite@2x.png";

const IconSocial = styled.li`
            width: 18px;
            height: 18px;
            background-image: url(${sprite});
            background-size: 162px 38px;
            background-position: 0 -20px;
            display: block;
            margin: 10px 4px 0 4px;
            `;
const IconFacebook = styled(IconSocial)`
            background-position: 0 -20px;
            `;
const IconInstagram = styled(IconSocial)`
            background-position: -18px -20px;
            `;
const IconLINE = styled(IconSocial)`
            background-position: -36px -20px;
            `;
const IconYoutube = styled(IconSocial)`
            background-position: -54px -20px;
            `;
const IconProcess = styled.li`
            background-image: url(${sprite});
            background-size: 162px 38px;
            background-position: 0 -20px;
            display: block;
            margin: 10px 4px 0 4px;
            `;
const IconCash = styled(IconProcess)`
            width: 22px;
            height: 18px;
            background-image: url(${sprite});
            background-size: 162px 38px;
            background-position: 0 0;
            ;`
const IconTransfer = styled(IconProcess)`
            width: 24px;
            height: 18px;
            background-position: -22px 0;
            ;`
const IconVISA = styled(IconProcess)`
            width: 35px;
            height: 18px;
            background-position: -46px 0;
            ;`
const IconMasterCard = styled(IconProcess)`
            width: 23px;
            height: 18px;
            background-position: -81px 0;
            ;`
const IconDHL = styled(IconProcess)`
            width: 58px;
            height: 18px;
            background-position: -104px 0;
            ;`

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col sm="12">
                            <p>Payment Detail | Delivery Detail | T&C | Privacy Policy | Return Policy | Contact us</p>
                            <span>#crazeTH</span>
                            <ul>
                                <a href="https://www.facebook.com/crazeTH" target="_blank"><IconFacebook /></a>
                                <a href="https://www.instagram.com/crazeth" target="_blank"><IconInstagram /></a>
                                <a href="https://line.me/R/ti/p/%40craze.th" target="_blank"><IconLINE /></a>
                                <a href="https://www.youtube.com/channel/UCDWb_EXVMeu9jcM4F4tpYoQ" target="_blank"><IconYoutube /></a>
                            </ul>
                            <ul>
                                <IconCash />
                                <IconTransfer />
                                <IconVISA />
                                <IconMasterCard />
                                <IconDHL />
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}