import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import testimonial1 from '../assets/images/01.png'
import testimonial2 from '../assets/images/02.png'
import testimonial3 from '../assets/images/04.png'

export default class Testimonials extends Component {
    render() {
        var settings1 = {
            dots: false,
            arrow:false,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
          };
        return (
            <Fragment>
                <Container fluid className="pt-100 pb-100 testimonialsArea bg">
                    <Container>
                        <Row className="sectionTitle">
                            <Col lg={6}>
                                <h3><span>who we are?</span> Clients Review</h3>
                            </Col>
                            <Col lg={6}>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12}>
                                <Slider {...settings1}>
                                    <div className="singleTestimonial">
                                        <img src={testimonial1} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem voluptatibus labore ullam impedit ex at magnam nesciunt, placeat suscipit!</p>
                                        <h4>john doe <span>web developer</span></h4>
                                    </div>
                                    <div className="singleTestimonial">
                                        <img src={testimonial2} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem voluptatibus labore ullam impedit ex at magnam nesciunt, placeat suscipit!</p>
                                        <h4>john doe <span>web developer</span></h4>
                                    </div>
                                    <div className="singleTestimonial">
                                        <img src={testimonial3} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem voluptatibus labore ullam impedit ex at magnam nesciunt, placeat suscipit!</p>
                                        <h4>john doe <span>web developer</span></h4>
                                    </div>
                                    <div className="singleTestimonial">
                                        <img src={testimonial2} alt=""/>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem voluptatibus labore ullam impedit ex at magnam nesciunt, placeat suscipit!</p>
                                        <h4>john doe <span>web developer</span></h4>
                                    </div>
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
