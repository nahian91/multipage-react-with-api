import React, { Component, Fragment } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row>
                        <Col lg={4}>
                            <div className="singleContact">
                                <FontAwesomeIcon icon={faMapMarkerAlt} /> 
                                <h4>address <span>123, michighan, usa</span></h4>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleContact">
                                <FontAwesomeIcon icon={faPhoneAlt} /> 
                                <h4>phone <span>11223344</span></h4>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleContact">
                                <FontAwesomeIcon icon={faEnvelope} /> 
                                <h4>email <span>info@demo.com</span></h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <div className="contactForm">
                                <form action="">
                                    <Row>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Subject</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" className="form-control"/>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <label>Message</label>
                                                <textarea className="form-control" cols="30" rows="6"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <input type="submit" value="Send Message" className="form-control btn btn-primary"/>
                                            </div>
                                        </Col>
                                    </Row>
                                    
                                    
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
