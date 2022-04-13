import React from 'react';
import { Card, CardGroup, Carousel, Col, Container, NavLink, Row } from 'react-bootstrap';
import { Bounce, Fade, Slide } from 'react-reveal';

import slider1 from '../../assets/slider1.jpg';
//import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.jpg';

import banner1 from '../../assets/h1-banner1.jpg';
import banner2 from '../../assets/h1-banner2.jpg';
import banner3 from '../../assets/h1-banner3.jpg';
import '../Home/Home.css';
import rev from '../../assets/rev_home1.jpg';

import cimg1 from '../../assets/helmet1.jpg';
import cimg2 from '../../assets/bycle-wheel.jpg';
import cimg3 from '../../assets/cycle-icon.jpg';


import hbanner1 from '../../assets/h2-banner2.jpg';
import hbanner2 from '../../assets/h2-banner1.jpg';

const Home = () => {
    return (
        <div className='gfont'>
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

            {/* This is gutter section */}
            <div className='mb-5'>
                <Row className='m-0 g-0'>
                    <Col xs='12' lg='4'><div
                        style={{
                            background: `url(${banner1})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: "100%",

                        }} className='mx-0'
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5">
                                <Bounce left cascade>
                                    <h2 className="text-white">SingleTrack</h2>
                                    <p className='text-white'><span style={{ color: "orange" }}>THE ALL-NEW </span>TRANCE ADVANCE PRO 29 SERIES</p>
                                </Bounce>
                                <button className='link-button'>Learn More</button>
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
                        className='mx-0'
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5">
                                <Bounce right cascade>
                                    <h2 className="text-white">Trail Power</h2>
                                    <p className='text-white'><span style={{ color: "orangered" }}>25% OFF </span>TRANCE X ADVANCE E+</p>
                                </Bounce>
                                <button className='shop-now-button'>Discover More</button>
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
                                        <p className='text-white'><span style={{ color: 'orange' }}>NEW STYLE</span> JUST GOT IT</p>
                                    </Bounce>

                                    <button className='link-button'>Shop Now</button>
                                </div>
                            </div>
                        </div >
                    </Col>
                </Row>
            </div>
            {/* This is special features service */}
            <div className="text-center text-black gfont mt-5 mb-5">
                <Slide left>
                    <h6 className='mt-5 mb-5' style={{ color: "orangered" }}>YOUR RIDE START HERE</h6>
                </Slide>

                <Slide right>
                    <h1 className='gfont mb-5' style={{ color: "black" }}>Our Facilities & Features</h1>
                </Slide>

                <div className='pic'>
                    <CardGroup>
                        <Card>
                            <Card.Img variant="top" src={cimg1} />
                            <Card.Body>
                                <Card.Title>Complete Overhaul</Card.Title>
                                <Card.Text>
                                    We provide a wide range of support for special gear and brake control.In any case you can visit our shop.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={cimg2} />
                            <Card.Body>
                                <Card.Title>Custom Parts & Accessories</Card.Title>
                                <Card.Text>
                                    We provide a wide range of support for special gear and brake control.In any case you can visit our shop.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={cimg3} />
                            <Card.Body>
                                <Card.Title>Bike Fitting & Delivery</Card.Title>
                                <Card.Text>
                                    We provide a wide range of support for special gear and brake control.In any case you can visit our shop.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </div>
            {/* This categories 2 */}
            <div className='mt-5'>
                <Row className='g-0'>
                    <Col xs='12' lg='6'><div
                        style={{
                            background: `url(${hbanner1})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "90vh"

                        }} className='mx-0'
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5 align-items-center justify-content-center">
                                <Bounce left cascade>
                                    <h1 className='text-black gfont'>KIDS BIKES</h1>
                                    <p className='text-dark'>Close-out pricing on dozens products.</p>

                                </Bounce>
                                <button className='shop-now-button'>Shop Now</button>
                            </div>
                        </div>
                    </div >
                    </Col>
                    <Col xs='12' lg='6'><div
                        style={{
                            background: `url(${hbanner2})`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            width: "100%",
                            height: "90vh"
                        }}
                        className='mx-0'
                    >
                        <div
                            className="d-flex justify-content-center align-items-center"
                        >
                            <div className="text-center my-5 py-5">
                                <Bounce right cascade>
                                    <h1 className='text-black gfont align-items-center justify-content-center'>ACCESSORIES</h1>
                                    <p>Close-out pricing on dozens products.</p>
                                </Bounce>
                                <button className='shop-now-button'>Shop Now</button>
                            </div>
                        </div>
                    </div >
                    </Col>
                </Row>
            </div>
        </div >

    );
};

export default Home;