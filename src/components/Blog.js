import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import blog1 from '../assets/images/blog1.jpg'
import blog2 from '../assets/images/blog2.jpg'
import blog3 from '../assets/images/blog3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faUser } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from 'react-router-dom'

export default class Blog extends Component {
    render() {
        return (
            <Fragment>
                <Container className="blogArea pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> latest news</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={4}>
                            <div className="singleBlog">
                                <img src={blog1} alt=""/>
                                <h4>BLog Title</h4>
                                <div className="blog-meta">
                                    <a href=""><FontAwesomeIcon icon={faCalendar} /> 20 Nov 2020</a>
                                    <a href=""><FontAwesomeIcon icon={faUser} /> admin</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure consequatur modi consectetur iusto sapiente suscipit adipisci soluta vero, voluptatibus odit quasi ab laudantium explicabo?</p>
                                <Button variant="primary"><NavLink to="/single-blog">Read More</NavLink></Button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleBlog">
                                <img src={blog2} alt=""/>
                                <h4>BLog Title</h4>
                                <div className="blog-meta">
                                    <a href=""><FontAwesomeIcon icon={faCalendar} /> 20 Nov 2020</a>
                                    <a href=""><FontAwesomeIcon icon={faUser} /> admin</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure consequatur modi consectetur iusto sapiente suscipit adipisci soluta vero, voluptatibus odit quasi ab laudantium explicabo?</p>
                                <Button variant="primary"><NavLink to="/single-blog">Read More</NavLink></Button>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="singleBlog">
                                <img src={blog3} alt=""/>
                                <h4>BLog Title</h4>
                                <div className="blog-meta">
                                    <a href=""><FontAwesomeIcon icon={faCalendar} /> 20 Nov 2020</a>
                                    <a href=""><FontAwesomeIcon icon={faUser} /> admin</a>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis iure consequatur modi consectetur iusto sapiente suscipit adipisci soluta vero, voluptatibus odit quasi ab laudantium explicabo?</p>
                                <Button variant="primary"><NavLink to="/single-blog">Read More</NavLink></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
