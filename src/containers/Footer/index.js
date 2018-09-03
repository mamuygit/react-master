import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from "styled-components";

import png from "../../images/sprite@2x.png";

const sprite = styled.li`
            display: block;
            background-image: url(${png});
            background-size: 162px 38px;
            margin: 10px 4px 0 4px;
            `;
const IconSocial = styled(sprite)`
            width: 18px;
            height: 18px;
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
const IconCash = styled(sprite)`
            width: 22px;
            height: 18px;
            background-position: 0 0;
            ;`
const IconTransfer = styled(sprite)`
            width: 24px;
            height: 18px;
            background-position: -22px 0;
            ;`
const IconVISA = styled(sprite)`
            width: 35px;
            height: 18px;
            background-position: -46px 0;
            ;`
const IconMasterCard = styled(sprite)`
            width: 23px;
            height: 18px;
            background-position: -81px 0;
            ;`
const IconDHL = styled(sprite)`
            width: 58px;
            height: 18px;
            background-position: -104px 0;
            ;`

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="con">
                    <Col xs="12">
                        <p>Payment Detail | Delivery Detail | T&C | Privacy Policy | Return Policy | Contact us</p>
                        <div className="opa-7">
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
                        </div>
                    </Col>
                </div>
            </div>
        );
    }
}