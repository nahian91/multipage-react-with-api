import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Accordion, Card, ProgressBar } from 'react-bootstrap'

export default class Skills extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="skillsArea pt-100 pb-100 bg">
                    <Container>
                        <Row>
                            <Col lg={6}>
                                <div className="skillTitle">
                                    <h4>FAQ</h4>
                                </div>
                                <div className="singleSkill">
                                    <Accordion defaultActiveKey="0">
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Lorem ipsum dolor sit amet.
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo tenetur alias culpa eaque libero similique enim minus optio unde.</p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Lorem ipsum dolor sit amet.
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo tenetur alias culpa eaque libero similique enim minus optio unde.</p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="21">
                                            Lorem ipsum dolor sit amet.
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo tenetur alias culpa eaque libero similique enim minus optio unde.</p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                            Lorem ipsum dolor sit amet.
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla explicabo tenetur alias culpa eaque libero similique enim minus optio unde.</p>
                                            </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="skillTitle">
                                    <h4>Exclusive Skills</h4>
                                </div>
                                <div className="singleProgress">
                                    <h4>Html</h4>
                                    <ProgressBar variant="primary" now={88} />
                                </div>
                                <div className="singleProgress">
                                    <h4>Css</h4>
                                    <ProgressBar variant="primary" now={67} />
                                </div>
                                <div className="singleProgress">
                                    <h4>Adobe Photoshop</h4>
                                    <ProgressBar variant="primary" now={93} />
                                </div>
                                <div className="singleProgress">
                                    <h4>Php</h4>
                                    <ProgressBar variant="primary" now={66} />
                                </div>
                                <div className="singleProgress">
                                    <h4>WordPress</h4>
                                    <ProgressBar variant="primary" now={72} />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
