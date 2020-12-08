import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faEnvelope, faPhoneAlt, faMobileAlt, faGlobeEurope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="footerArea">
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <div className="singleFooter">
                                    <h2>halim</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, ducimus!</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="singleFooter">
                                    <h4>quick links</h4>
                                    <ul>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Home</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> About</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Services</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Blog</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Contact Us</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className="singleFooter">
                                    <h4>quick links</h4>
                                    <ul>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet.</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet.</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet.</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet.</a></li>
                                        <li><a href=""><FontAwesomeIcon icon={faAngleDoubleRight} /> Lorem ipsum dolor sit amet.</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                            <div className="singleFooter">
                                    <h4>Get in TOuch</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMapMarker} /> 245 Street, Sydney, Australia</li>
                                        <li><FontAwesomeIcon icon={faPhoneAlt} />  +23 0034 5567 341</li>
                                        <li><FontAwesomeIcon icon={faMobileAlt} />  +23 0034 5567 341</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} />  info@demo.com</li>
                                        <li><FontAwesomeIcon icon={faGlobeEurope} />  www.demo.com</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="copy">
                                    <p>&copy; 2020 All Rights Reserved.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
