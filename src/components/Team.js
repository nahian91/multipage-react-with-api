import React, { Component, Fragment } from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import team1 from '../assets/images/1.jpg'
import team2 from '../assets/images/2.jpg'
import team3 from '../assets/images/3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

export default class Team extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> skilled team</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="singleTeam">
                                <img src={team1} alt=""/>
                                <div className="teamOverlay">
                                    <div className="teamContent">
                                        <h4>John Doe <span>web developer</span></h4>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleTeam">
                                <img src={team2} alt=""/>
                                <div className="teamOverlay">
                                    <div className="teamContent">
                                        <h4>John Doe <span>web developer</span></h4>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleTeam">
                                <img src={team3} alt=""/>
                                <div className="teamOverlay">
                                    <div className="teamContent">
                                        <h4>John Doe <span>web developer</span></h4>
                                        <FontAwesomeIcon icon={faFacebookF} />
                                        <FontAwesomeIcon icon={faTwitter} />
                                        <FontAwesomeIcon icon={faInstagram} />
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
