import React from "react";
import "./Footer.css";
import payment from "./../../assets/payment.png";
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
                        <Col md={2}>
                            <h5 className="gfont">USEFUL LINKS</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Legal & Privacy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Gift Card</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Customer Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Account</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Find A Store</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">MY ACCOUNT</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Order History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">My Wish List</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Order Tracking</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Shopping Cart</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">COMPANY</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Careers</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Affiliate</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Contact Us</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={2}>
                            <h5 className="gfont">SHOP</h5>
                            <ul className="list-unstyled footer-link">
                                <li>
                                    <NavLink to="/home">Televisions</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Fridges</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Washing Machines</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Fans</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Air Conditioners</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home">Laptops</NavLink>
                                </li>
                            </ul>
                        </Col>
                        <Col md={4}>

                            <img src={payment} alt="" />
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
