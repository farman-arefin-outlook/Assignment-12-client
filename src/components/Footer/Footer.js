import React from "react";
import "./Footer.css";
import payment from "../../assets/payment.png";
import FooterBg from './../../assets/Footer_BG.jpg';
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="text-white">
            <div className="py-4" style={{ background: `url(${FooterBg})` }}>
                <Container>
                    <Row>
                        <Col md={6}>
                            <ul className="list-unstyled">
                                <li>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    <span className="ms-1 fs-5">Noakhali,Chittagong,Bangladesh</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <span className="ms-1 fs-5">
                                        Official: farman.arefin@gmail.com
                                    </span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <span className="ms-1 fs-5">
                                        Helpline: 01763251119 (Available:10:00AM to 10.00PM)
                                    </span>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">About us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/courses">Services</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/policy">Policy</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <div className="">
                                <img
                                    className="img-fluid"
                                    src={payment}
                                    alt="payment methods"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className="m-0 p-0" />
            <p className="text-center m-0 py-3 copyright footer-color">
                Copyright © All Right Reserved by Farman Arefin Tamim Community in 2021.
            </p>
        </div>
    );
};

export default Footer;
