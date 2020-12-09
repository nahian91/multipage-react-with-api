import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faEnvelope, faPhoneAlt, faMobileAlt, faGlobeEurope, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Footer extends Component {

    constructor(){
        super();

        this.state={
            foot_logo: "",
            foot_desc: "",
            email: "",
            phone: "",
            address: "",
            fax: "",
            web: "",
            copy: ""
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Settings).then(result=>{
            this.setState({foot_logo:result[0]['foot_logo'], foot_desc:result[0]['foot_desc'], email:result[0]['email'], phone:result[0]['phone'], address:result[0]['address'], fax:result[0]['fax'], web:result[0]['web'], copy:result[0]['copy']})
        });
    }

    render() {
        return (
            <Fragment>
                <Container fluid className="footerArea">
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <div className="singleFooter">
                                    <h2>{this.state.foot_logo}</h2>
                                    <p>{this.state.foot_desc}</p>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className="singleFooter">
                                    <h4>quick links</h4>
                                    <ul>
                                        <li><NavLink to="/"><FontAwesomeIcon icon={faAngleDoubleRight} /> Home</NavLink></li>
                                        <li><NavLink to="/about"><FontAwesomeIcon icon={faAngleDoubleRight} /> About</NavLink></li>
                                        <li><NavLink to="/services"><FontAwesomeIcon icon={faAngleDoubleRight} /> Services</NavLink></li>
                                        <li><NavLink to="/blog"><FontAwesomeIcon icon={faAngleDoubleRight} /> Blog</NavLink></li>
                                        <li><NavLink to="/contact"><FontAwesomeIcon icon={faAngleDoubleRight} /> Contact Us</NavLink></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                            <div className="singleFooter">
                                    <h4>quick links</h4>
                                    <ul>
                                        <li><NavLink to="/PrivacyPolicy"><FontAwesomeIcon icon={faAngleDoubleRight} /> Privacy Policy</NavLink></li>
                                        <li><NavLink to="TermsConditions"><FontAwesomeIcon icon={faAngleDoubleRight} /> Terms & Conditions</NavLink></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={3}>
                            <div className="singleFooter">
                                    <h4>Get in TOuch</h4>
                                    <ul>
                                        <li><FontAwesomeIcon icon={faMapMarker} /> {this.state.address}</li>
                                        <li><FontAwesomeIcon icon={faPhoneAlt} />  {this.state.phone}</li>
                                        <li><FontAwesomeIcon icon={faMobileAlt} />  {this.state.fax}</li>
                                        <li><FontAwesomeIcon icon={faEnvelope} />  {this.state.email}</li>
                                        <li><FontAwesomeIcon icon={faGlobeEurope} />  {this.state.web}</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <div className="copy">
                                    <p>{this.state.copy}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
