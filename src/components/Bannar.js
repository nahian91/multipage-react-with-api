import React, { Component, Fragment } from 'react'
import { Container, Button } from 'react-bootstrap';
import Slider from "react-slick";
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Bannar extends Component {

  constructor(){
    super();

    this.state={
        myData:[]
      }
    }

    componentDidMount(){
      RestClient.GetRequest(AppURL.Sliders).then(result=>{
          this.setState({myData:result})
      });
    }

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

        const bannarsList = this.state.myData;
        const bannars = bannarsList.map(bannarsList => {
            return <div className="singleSlide">
              <img src={bannarsList.image}/>
              <div className="slideContent">
                <h4>{bannarsList.sub_title}</h4>
                <h2>{bannarsList.title}</h2>
                <p>{bannarsList.description}</p>
                <Button variant="primary"><a href={bannarsList.link}>Read More</a></Button>
              </div>
          </div>
        });

        return (
            <Fragment>
              <Container fluid={true} className="bannarArea" style={{padding: 0}} > 
                <Slider {...settings}>
                    {bannars}
                </Slider>
              </Container>
            </Fragment>
        )
    }
}
