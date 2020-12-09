import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb} from '@fortawesome/free-solid-svg-icons'
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Services extends Component {

    constructor(){
        super();

        this.state={
            myData:[]
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Services).then(result=>{
            this.setState({myData:result})
        });
    }

    render() {
        const servicesList = this.state.myData;
        const services = servicesList.map(servicesList => {
            return <Col lg={4}>
            <div className="singleService">
                <FontAwesomeIcon icon={faLightbulb} />
                <h4>{servicesList.title}</h4>
                <p>{servicesList.description}</p>
            </div>
        </Col>
        });


        return (
            <Fragment>
                <Container className="pt-100 pb-100">
                    <Row className="sectionTitle">
                        <Col lg={6}>
                            <h3><span>who we are?</span> our services</h3>
                        </Col>
                        <Col lg={6}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry typesetting industry.d </p>
                        </Col>
                    </Row>
                    <Row>
                        {services}
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
