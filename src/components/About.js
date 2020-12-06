import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faUser, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export default class About extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> about us</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="aboutLeft">
                                <h4>welcome to halim</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio maxime laborum delectus aliquam ipsum itaque voluptatem non reiciendis aliquid totam facere, tempora iure iusto adipisci doloremque in, amet, alias nostrum. Explicabo reprehenderit.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda distinctio maxime laborum delectus aliquam ipsum itaque voluptatem non reiciendis aliquid totam facere, tempora iure iusto adipisci doloremque in, amet, alias nostrum. Explicabo reprehenderit.</p>
                                <Button variant="primary">Read More</Button>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="singleAbout">
                                <FontAwesomeIcon icon={faLaptop} />
                                <div className="singleAboutContent">
                                    <h4>our mission</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio nihil veniam mollitia ipsa commodi.</p>
                                </div>
                            </div>
                            <div className="singleAbout">
                                <FontAwesomeIcon icon={faUser} />
                                <div className="singleAboutContent">
                                    <h4>our vission</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio nihil veniam mollitia ipsa commodi.</p>
                                </div>
                            </div>
                            <div className="singleAbout">
                                <FontAwesomeIcon icon={faPencilAlt} />
                                <div className="singleAboutContent">
                                    <h4>our history</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus optio nihil veniam mollitia ipsa commodi.</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
