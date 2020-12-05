import React, { Component, Fragment } from 'react'
import {Container, Row, Col, Navbar, Nav} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

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
                            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="ml-auto">
                                    <Nav.Link href="">Home</Nav.Link>
                                    <Nav.Link href="">About</Nav.Link>
                                    <Nav.Link href="">Services</Nav.Link>
                                    <Nav.Link href="">Portfolio</Nav.Link>
                                    <Nav.Link href="">Gallery</Nav.Link>
                                    <Nav.Link href="">Blog</Nav.Link>
                                    <Nav.Link href="">Contact</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

