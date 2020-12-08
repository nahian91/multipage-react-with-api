import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'

export default class Cta extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="ctaArea">
                    <Container>
                        <Row className="alignCenter">
                            <Col lg={6}>
                                <h4>best solution for your business </h4>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, velit!</p>
                            </Col>
                            <Col lg={6}>
                                <Button variant="primary">Contact Us</Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
