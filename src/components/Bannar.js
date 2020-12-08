import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Slider from "react-slick";
import slide1 from '../assets/images/slide-1.jpg'
import slide2 from '../assets/images/slide-2.jpg'
import slide3 from '../assets/images/slide-3.jpg'

export default class Bannar extends Component {
    render() {
        var settings = {
            dots: true,
            arrow:false,
            infinite: true,
            //autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
        return (
            <Fragment>
              <Container fluid={true} className="bannarArea" style={{padding: 0}} > 
                <Slider {...settings}>
                    <div className="singleSlide">
                        <img src={slide1}/>
                        <div className="slideContent">
                          <h4>welcome to our agency</h4>
                          <h2>we love halim</h2>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cupiditate sed delectus illo esse inventore!</p>
                          <Button variant="primary">Read More</Button>
                        </div>
                    </div>
                    <div className="singleSlide">
                      <img src={slide2}/>
                        <div className="slideContent">
                          <h4>welcome to our agency</h4>
                          <h2>we love halim</h2>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cupiditate sed delectus illo esse inventore!</p>
                          <Button variant="primary">Read More</Button>
                        </div>
                    </div>
                    <div className="singleSlide">
                      <img src={slide3}/>
                        <div className="slideContent">
                          <h4>welcome to our agency</h4>
                          <h2>we love halim</h2>
                          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis cupiditate sed delectus illo esse inventore!</p>
                          <Button variant="primary">Read More</Button>
                        </div>
                    </div>
                </Slider>
              </Container>
            </Fragment>
        )
    }
}
