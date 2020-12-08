import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import Gallery1 from '../assets/images/blog1.jpg'

export default class Gallery extends Component {
    render() {
        return (
            <Fragment>
            <Container className="pt-100 pb-100">
                <Row>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="singleGallery">
                            <img src={Gallery1} alt=""/>
                            <div className="GalleryContent">
                                <FontAwesomeIcon icon={faPlusCircle} /> 
                                <h4>Gallery Title <span>branding</span></h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
        )
    }
}
