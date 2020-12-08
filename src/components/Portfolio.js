import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import portfolio1 from '../assets/images/blog1.jpg'

export default class Portfolio extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singlePortfolio">
                                <img src={portfolio1} alt=""/>
                                <div className="portfolioContent">
                                    <FontAwesomeIcon icon={faPlusCircle} /> 
                                    <h4>Portfolio Title <span>branding</span></h4>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
