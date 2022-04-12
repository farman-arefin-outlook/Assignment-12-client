import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Fade } from 'react-reveal';

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
                    <Col xs='12' lg='4'>
                        <div>
                            <div>
                                <img className='' src={banner1} alt="" />
                            </div>
                            <div>
                                <Button variant='primary'></Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs='12' lg='4'><img className='' src={banner2} alt="" /></Col>
                    <Col xs='12' lg='4'><img className='' src={banner3} alt="" /></Col>
                </Row>
            </div>
        </div>
    );
};

export default Home;