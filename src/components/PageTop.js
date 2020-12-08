import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="PageArea">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="pageTop">
                                    <h4>{this.props.title}</h4>
                                    <p>{this.props.description}</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
