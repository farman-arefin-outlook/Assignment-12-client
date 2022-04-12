import React from 'react';
import { Carousel, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Bounce, Fade } from 'react-reveal';

import slider1 from '../../assets/slider1.jpg';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.jpg';

import banner1 from '../../assets/h1-banner1.jpg';
import banner2 from '../../assets/h1-banner2.jpg';
import banner3 from '../../assets/h1-banner3.jpg';

import rev from '../../assets/rev_home1.jpg';
const Home = () => {
    return (
        <div>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <Fade bottom>
                                <span>SLASH 9.8 GX</span>
                            </Fade>
                            <Fade bottom>
                                <h1>Sporty Ride Or</h1>
                                <h1>Speedy</h1>
                                <h1>Commuter</h1>
                            </Fade>
                        </Carousel.Caption>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-flex w-100"
                            src={rev}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <Fade bottom>
                                <span>FOX SERIES X</span>
                            </Fade>
                            <Fade bottom>
                                <h1>The Next</h1>
                                <h1>Generation Of Bikes</h1>
                            </Fade>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <Fade bottom>
                                <span>FOX SERIES X</span>
                            </Fade>
                            <Fade bottom>
                                <h1>The Next</h1>
                                <h1>Generation Of Bikes</h1>
                            </Fade>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Row>
                    <Col xs='12' lg='4'><div className='m-0 p-0 fluid'
                        style={{
                            background: `url(${banner1})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: "100%",
                        }}
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5">
                                <Bounce left cascade>
                                    <h2 className="text-white">SingleTrack</h2>
                                </Bounce>

                                {/* <Bounce>
                                    <NavLink
                                        to="/courses"
                                        className="rounded-pill btn btn-primary"
                                    >
                                        View Services
                                    </NavLink>
                                </Bounce> */}
                            </div>
                        </div>
                    </div >
                    </Col>
                    <Col xs='12' lg='4'><div
                        style={{
                            background: `url(${banner2})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: "100%",
                        }}
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5">
                                <Bounce right cascade>
                                    <h2 className="text-white">Trail Power</h2>
                                </Bounce>

                                {/* <Bounce>
                                    <NavLink
                                        to="/courses"
                                        className="rounded-pill btn btn-primary"
                                    >
                                        View Services
                                    </NavLink>
                                </Bounce> */}
                            </div>
                        </div>
                    </div >
                    </Col>
                    <Col xs='12' lg='4'>
                        <div
                            style={{
                                background: `url(${banner3})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center center",
                                backgroundSize: "cover",
                                width: "100%",
                            }}
                        >
                            <div
                                className="d-flex justify-content-center align-items-center"
                            >
                                <div className="text-center my-5 py-5">
                                    <Bounce left cascade>
                                        <h2 className="text-white">Road Bikes</h2>
                                    </Bounce>

                                    {/* <Bounce>
                                    <NavLink
                                        to="/courses"
                                        className="rounded-pill btn btn-primary"
                                    >
                                        View Services
                                    </NavLink>
                                </Bounce> */}
                                </div>
                            </div>
                        </div >
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;