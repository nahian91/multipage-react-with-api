import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import AppURL from '../RestAPI/AppURL'
import RestClient from '../RestAPI/RestClient'

export default class Cta extends Component {

    constructor(){
        super();

        this.state={
            title: "",
            description: "",
            btn_text: "",
            btn_link: ""
        }
    }

    componentDidMount(){
        RestClient.GetRequest(AppURL.Ctas).then(result=>{
            this.setState({title:result['title'], description:result['description'], btn_text:result['btn_text'], btn_link:result['btn_link']})
        });
    }

    render() {
        return (
            <Fragment>
                <Container fluid className="ctaArea">
                    <Container>
                        <Row className="alignCenter">
                            <Col lg={6}>
                                <h4>{this.state.title}</h4>
                                <p>{this.state.description}</p>
                            </Col>
                            <Col lg={6}>
                                <Button variant="primary"><a href={this.state.btn_link}>{this.state.btn_text}</a></Button>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Fragment>
        )
    }
}
