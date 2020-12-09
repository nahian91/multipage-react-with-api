import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Slider from "react-slick";
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Testimonials extends Component {

    constructor(){
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Testimonials).then(result=>{
            this.setState({myData:result})
        });
    }

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

        const testimonialsList = this.state.myData;
        const testimonials = testimonialsList.map(testimonialsList => {
            return <div className="singleTestimonial">
                <img src={testimonialsList.image} alt=""/>
                <p>{testimonialsList.description}</p>
                <h4>{testimonialsList.name} <span>{testimonialsList.designation}</span></h4>
            </div>
        });

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
                                    {testimonials}
                                </Slider>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
