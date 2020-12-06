import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CountUp from 'react-countup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faCog, faMobileAlt, faMagic, faPencilAlt, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import VisibilitySensor from 'react-visibility-sensor'

export default class Counter extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="counterArea">
                    <Row>
                        <Col lg={3}>
                            <div className="singleCounter">
                                <FontAwesomeIcon icon={faLaptop} /> 
                                <div className="counterContent">
                                    <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                            <span ref={countUpRef} />
                                            <h4>Cup of Coffees</h4>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="singleCounter">
                                <FontAwesomeIcon icon={faLaptop} /> 
                                <div className="counterContent">
                                    <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                            <span ref={countUpRef} />
                                            <h4>Cup of Coffees</h4>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="singleCounter">
                                <FontAwesomeIcon icon={faLaptop} /> 
                                <div className="counterContent">
                                    <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                            <span ref={countUpRef} />
                                            <h4>Cup of Coffees</h4>
                                            </div>
                                        )}
                                    </CountUp>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className="singleCounter">
                                <FontAwesomeIcon icon={faLaptop} /> 
                                <div className="counterContent">
                                <VisibilitySensor>
                                    <CountUp start={0} end={100} delay={0}>
                                        {({ countUpRef }) => (
                                            <div>
                                            <span ref={countUpRef} />
                                            <h4>Cup of Coffees</h4>
                                            </div>
                                        )}
                                    </CountUp>
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
