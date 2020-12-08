import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topArea">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="topLeft">
                                    <a href=""><FontAwesomeIcon icon={faEnvelopeOpen} /> info@halim.com</a>
                                    <a href=""><FontAwesomeIcon icon={faPhoneAlt} /> 11223344</a>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="topSocial">
                                    <a href=""><FontAwesomeIcon icon={faFacebookF} /></a>
                                    <a href=""><FontAwesomeIcon icon={faTwitter} /></a>
                                    <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
                                    <a href=""><FontAwesomeIcon icon={faYoutube} /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Container>
                    <Row>
                        <Navbar collapseOnSelect expand="lg">
                            <Navbar.Brand><NavLink to="/">Halim</NavLink></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/about">About</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/services">Services</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/portfolio">Portfolio</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/gallery">Gallery</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/blog">Blog</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/contact">Contact</NavLink></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

