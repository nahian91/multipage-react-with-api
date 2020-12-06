import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCog, faMobileAlt, faMagic, faPencilAlt, faLightbulb} from '@fortawesome/free-solid-svg-icons'

export default class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> our services</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faLaptop} />
                                <h4>web design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faCog} />
                                <h4>Web Development</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faMobileAlt} />
                                <h4>responsive design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faMagic} />
                                <h4>graphic design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faPencilAlt} />
                                <h4>creative design</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleService">
                                <FontAwesomeIcon icon={faLightbulb} />
                                <h4>branding</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque non pariatur fuga maxime, alias nostrum earum quia reiciendis impedit corporis!</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
