import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card, ListGroup } from 'react-bootstrap'
import blogImg from '../assets/images/blog1.jpg'
import Header from '../components/Header'
import PageTop from '../components/PageTop'
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default class SingleBlog extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <PageTop title="Single Page" description="Lorem Ipsum Dummy Text"/>
                <Container className="pt-100 pb-100">
                    <Row>
                        <Col lg={8}>
                            <div className="singleBlog">
                                <h2>Blog Title</h2>
                                <img src={blogImg} alt=""/>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam sed eligendi sint quo amet facere sunt nulla quidem tenetur. Blanditiis ex tempora a culpa quia laudantium eligendi, architecto esse!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam sed eligendi sint quo amet facere sunt nulla quidem tenetur. Blanditiis ex tempora a culpa quia laudantium eligendi, architecto esse!</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quam sed eligendi sint quo amet facere sunt nulla quidem tenetur. Blanditiis ex tempora a culpa quia laudantium eligendi, architecto esse!</p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="sidebar">
                                <Card>
                                    <Card.Header>Category</Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <br/>
                            <div className="sidebar">
                                <Card>
                                    <Card.Header>Popular Posts</Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                            <br/>
                            <br/>
                            <div className="sidebar">
                                <Card>
                                    <Card.Header>Recent Posts</Card.Header>
                                    <Card.Body>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Cta/>
                <Footer/>
            </Fragment>
        )
    }
}
