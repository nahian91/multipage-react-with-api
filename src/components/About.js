import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

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
                </Container>
            </Fragment>
        )
    }
}
